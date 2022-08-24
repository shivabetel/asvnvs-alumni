import { Rect } from "react-native-svg"
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient"

const TextPreloader = () => {
    return (
        <SvgAnimatedLinearGradient height={200} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">           
            <Rect x="0" y="5" rx="4" ry="4" width={'100%'} height="200" />
            {/* <Rect x="0" y="40" rx="4" ry="4" width={'100%'} height="10" />
            <Rect x="0" y="70" rx="4" ry="4" width={'100%'} height="10" />
            <Rect x="0" y="100" rx="4" ry="4" width={'100%'} height="10" />
            <Rect x="0" y="130" rx="4" ry="4" width={'100%'} height="10" /> */}
        </SvgAnimatedLinearGradient>
    )
}

export default TextPreloader;