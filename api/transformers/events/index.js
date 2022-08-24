import get from "lodash/get";
import castArray from "lodash/castArray";
import { genericCMSResponseTransformer } from "../../utils/transformUtils";

const getAttributeValue = (data, props, defaultValue) => get(data, ['attributes', ...castArray(props)], defaultValue)
const transformEventsContent = ({data}) => {
    return  data ? (() => {
        const pastEventsBlock = getAttributeValue(data, 'pastEventsBlock', [])
        const upcomingEventsBlock = getAttributeValue(data, 'upcomingEventsBlock', [])
        const returnObj = {
            upcomingEventsSection: pastEventsBlock?.length > 0 ? genericCMSResponseTransformer(upcomingEventsBlock) : null,
            pastEventsSection: pastEventsBlock?.length > 0 ? genericCMSResponseTransformer(pastEventsBlock) : null
        }
        console.log("returnObj:",returnObj)
        return returnObj;
    })() : null;
}

export default transformEventsContent;