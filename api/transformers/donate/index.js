import get from "lodash/get";
import castArray from "lodash/castArray";
import { genericCMSResponseTransformer } from "../../utils/transformUtils";

const getAttributeValue = (data, props, defaultValue) => get(data, ['attributes', ...castArray(props)], defaultValue)
const transformDonatePageContent = ({data}) => {
    return  data ? (() => {        
        const bannerBlock = getAttributeValue(data, 'bannerBlock', [])
        const contentBlock = getAttributeValue(data, 'contentBlock', [])  
        const backgroundImageBlock = getAttributeValue(data, 'backgroundImageBlock', [])        
        return {
            bannerSection: bannerBlock?.length > 0 ? genericCMSResponseTransformer(bannerBlock): null,
            contentSection: contentBlock?.length > 0 ? genericCMSResponseTransformer(contentBlock) : null,
            backgroundImage: backgroundImageBlock?.length > 0 ? genericCMSResponseTransformer(backgroundImageBlock) : null
        }
    })() : null;
}

export default transformDonatePageContent;