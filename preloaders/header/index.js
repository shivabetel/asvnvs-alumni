import { Circle, Rect } from "react-native-svg"
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient"

const HeaderPreloader = () => {
    return (
        <SvgAnimatedLinearGradient height={120} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
            <Circle cx="15" cy="40" r="15" />
            <Rect x="40" y="35" rx="4" ry="4" width={200} height="10" />
            <Rect x="0" y="60" rx="4" ry="4" width={'100%'} height="10" />
            <Rect x="0" y="80" rx="4" ry="4" width={'100%'} height="10" />
        </SvgAnimatedLinearGradient>
    )
}

export default HeaderPreloader;