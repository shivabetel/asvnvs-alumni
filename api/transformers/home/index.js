import { genericCMSResponseTransformer } from "../../utils/transformUtils"

export const transformHomeContent = ({data}) => {
    return data ? (() => {
       // const carouselBlock = data?.attributes?.carouselBlock || [];      
        const cardsBlock = data?.attributes?.cardsBlock || [];
        console.log("cardsBlock:",cardsBlock)
        return {
            cardsSection: cardsBlock?.length > 0 ? genericCMSResponseTransformer(cardsBlock) : null
        }
    })() : null
    
}