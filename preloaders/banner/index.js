import { Dimensions, View } from 'react-native';
import { Rect } from 'react-native-svg'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'

const { width } = Dimensions.get('screen')
const BannerPreloader = ({height}) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <SvgAnimatedLinearGradient height={height || 300} width={width} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                <Rect x="0" y="0" rx="4" ry="4" width={width} height={height || 300} />
            </SvgAnimatedLinearGradient>
        </View>
    )
}

export default BannerPreloader;