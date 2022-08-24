import get from "lodash/get";

const trim = (value, char = ' ') => {
    return value ? (() => {

        const recursive = (str) => {
            const leadingChar = str.slice(0, 1);
            const trailingChar = str.slice(-1);
            let newStr = str;
            let foundLeadingTrailingChar = false;
            if (leadingChar == char) {
                foundLeadingTrailingChar = true;
                newStr = newStr.slice(1);
            }
            if (trailingChar == char) {
                foundLeadingTrailingChar = true
                newStr = newStr.slice(0, -1);
            }

            return foundLeadingTrailingChar ? recursive(newStr) : newStr
        }

        return recursive(value)
    })() : null
}
const getStrapiMediaPath = (path) => {
    return path ? (() => {
        if (path.indexOf('http') == 0 || path.indexOf('https') == 0)
            return path


        return `https://storage.googleapis.com/${trim(path)}`
    })() : null
}
const getBanner = (banner) => {
    return banner ? {
        ...banner,
        bannerImage: getStrapiMediaPath(banner?.bannerImage?.url)
    } : null
}

const getHeader = header => {
    return header ? {
        ...header
    } : null
}
const getFooter = footer => {
    return footer ? {
        ...footer
    } : null
}
export const transformUtils = {
    transformBanner(block) {
        const banner = block.find(obj => obj['__component'] == 'shared.banner')
        return banner ? getBanner(banner) : null
    },
    transformCarouselBanner(block) {
        return block ? (() => {
            const carouselBannerBlocks = block.filter(obj => obj['__component'] == 'blocks.carousel-banner')
            return {
                carouselBannerSection: (carouselBannerBlocks || []).map(carouselBlock => ({
                    carouselBanners: (carouselBlock?.banners || []).map(banner => getBanner(banner))
                }))
            }
        })() : null

    },
    transformContentBlock(block) {
        return block ? (() => {
            const contentBlock = (block || []).find(obj => obj['__component'] == 'blocks.content')
            return contentBlock ? {
                header: getHeader(contentBlock?.header),
                text: contentBlock?.text
            } : null
        })() : null
    },
    transformHeader(block) {
        return block ? (() => {
            const header = (block || []).find(obj => obj['__component'] == 'shared.header')
            return header ? getHeader(header) : null
        })() : null
    },
    trasformFooter(block) {
        return block ? (() => {
            const footer = (block || []).find(obj => obj['__component'] == 'shared.footer')
            return footer ? getFooter(footer) : null
        })() : null
    },
    transformEvents(block) {
        return block ? (() => {
            const eventBlock = (block || []).find(obj => obj['__component'] == 'blocks.events')
            return eventBlock ? (() => {
                return (eventBlock.events || []).map(event => ({
                    header: getHeader(event?.header),
                    footer: getFooter(event?.footer),
                    images: (event?.images || []).map(image => ({
                        url: getStrapiMediaPath(image?.url)
                    }))
                }))
            })() : null
        })() : null
    },
    transformImage(block) {
        return block ? (() => {
            const imageBlock = (block || []).find(obj => obj['__component'] == 'shared.image')
            return imageBlock ? {
                url: getStrapiMediaPath(imageBlock?.url)
            } : null
        })() : null
    },
    transformDonate(block){
        return block ? (() => {
            const donateBanksBlock = (block || []).find(obj => obj['__component'] == 'donate.banks')
            return donateBanksBlock ? (() => {
                return (donateBanksBlock?.accounts || []).map(acount => ({
                    label: acount?.key,
                    value: acount?.value
                }))
            })() : null
        })() : null
    },
    transformCards(block) {
        return block ? (() => {
            const cardsBlock = (block || []).find(obj => obj['__component'] == 'blocks.cards')
            return cardsBlock ? (() => {
                return (cardsBlock?.cards || []).map(card => ({
                    cardImage: getStrapiMediaPath(get(card, ['cardImage', 'url'])),
                    caption: {
                        ...get(card, ['caption'], {}),
                        icon: {
                            ...get(card, ['caption', 'icon'], {})
                        }
                    },
                    description: get(card, 'description'),
                    target: get(card, 'target'),
                }))
            })() : null
        })() : null
    }
}

const componentTransformerMap = {
    'blocks.events': {
        key: 'eventsBlock',
        transformer: (data) => transformUtils.transformEvents(data ? [data] : [])
    },
    'shared.banner': {
        key: 'banner',
        transformer: data => transformUtils.transformBanner(data ? [data] : [])
    },
    'shared.header': {
        key: 'header',
        transformer: data => transformUtils.transformHeader(data ? [data] : [])
    },
    'shared.footer': {
        key: 'footer',
        transformer: data => transformUtils.trasformFooter(data ? [data] : [])
    },
    'shared.image': {
        key: 'image',
        transformer: data => transformUtils.transformImage(data ? [data] : [])
    },
    'donate.banks': {
        key: 'accounts',
        transformer: data => transformUtils.transformDonate(data ? [data] : [])
    },
    'blocks.content': {
        key: 'contentBlock',
        transformer: data => transformUtils.transformContentBlock(data ? [data] : [])
    },
    'blocks.cards': {
        key: 'cards',
        transformer: data => transformUtils.transformCards(data ? [data] : [])
    }

}


const groupItemsByComponent = (block) => {
    return (block || []).reduce((acc, block) => {
        if (acc[block['__component']]) {
            acc[block['__component']].push(block)
        } else {
            acc[block['__component']] = [block]
        }
        return acc;
    }, {})
}

export const genericCMSResponseTransformer = (block) => {
    return block ? (() => {
        const groupedItems = groupItemsByComponent(block)       
        const blockToLoop = Object.keys(groupedItems)
            .map(key => groupedItems[key])
            .sort((a, b) => b.length - a.length)[0]

        let result = []
        for (let i = 0; i < blockToLoop.length; ++i) {

            result.push(Object.keys(groupedItems).reduce((acc, key) => {
                return {
                    ...acc,
                    [componentTransformerMap[key]['key']]: componentTransformerMap[key]?.transformer(groupedItems?.[key]?.[i])
                }
            }, {}))
        }     
        return result;
    })() : null

}