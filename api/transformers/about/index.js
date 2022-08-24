import { castArray } from "lodash"
import get from "lodash/get"
import Banner from "../../../components/banner"
import { genericCMSResponseTransformer, transformUtils } from "../../utils/transformUtils"

const getAttributeValue = (data, props, defaultValue) => get(data, ['attributes', ...castArray(props)], defaultValue)
const transformAboutContent = (payload) => {
    const data = payload?.data;
    return data ? (() => {
        console.log("data:",data)
        const bannerBlock = getAttributeValue(data, 'bannerBlock', [])
        const contentBlock = getAttributeValue(data, 'contentBlock', [])

        return {
            bannerSection: genericCMSResponseTransformer(bannerBlock),
            contentSection: genericCMSResponseTransformer(contentBlock)
        }
    })() : null
}

export default transformAboutContent;