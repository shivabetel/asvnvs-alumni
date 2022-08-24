import { Dimensions, View } from 'react-native'
import { Circle, Rect } from 'react-native-svg'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import { colors } from '../../styles/colors'
import BannerPreloader from '../banner'
import HeaderPreloader from '../header'
import TextPreloader from '../text'

const { width, height } = Dimensions.get('screen')
const DonatePreloader = () => {
    return (
        <View>
            <BannerPreloader height={200} />
            <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                <HeaderPreloader />
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderWidth: 1,
                borderColor: '#dcd8d8',
                //elevation: 10,
                borderRadius: 10,
                shadowColor: colors.white,
                shadowOpacity: 0.15,
                shadowRadius: 10,
                margin: 10
            }}>
                <SvgAnimatedLinearGradient height={120} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                    <Rect x="0" y="20" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="55%" y="20" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="0" y="40" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="55%" y="40" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="0" y="60" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="55%" y="60" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="0" y="80" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="55%" y="80" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="0" y="100" rx="4" ry="4" width={'40%'} height="10" />
                    <Rect x="55%" y="100" rx="4" ry="4" width={'40%'} height="10" />
                </SvgAnimatedLinearGradient>
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                <SvgAnimatedLinearGradient height={120} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                    <Rect x="0" y="10" rx="4" ry="4" width={'100%'} height="10" />
                    <Rect x="0" y="40" rx="4" ry="4" width={'100%'} height="10" />
                </SvgAnimatedLinearGradient>
            </View>
        </View>
    )
}




export default DonatePreloader;