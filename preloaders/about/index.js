import { Dimensions, View } from 'react-native'
import { Circle, Rect } from 'react-native-svg'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import BannerPreloader from '../banner'
import HeaderPreloader from '../header'
import TextPreloader from '../text'

const { width, height } = Dimensions.get('screen')
const AboutPreloader = () => {
    return (
        <View>
            <BannerPreloader height={200}/>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                <HeaderPreloader />
            </View>
            <View style={{paddingHorizontal: 10}}>
                <TextPreloader/>
            </View>
        </View>
    )
}




export default AboutPreloader;