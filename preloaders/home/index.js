import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Dimensions, View } from 'react-native'
import { colors } from '../../styles/colors'
import HeaderPreloader from '../header'

const { width } = Dimensions.get('screen')
const HomePreloader = () => {
    return (
        <View>
            {[1, 2, 3].map(value => (
                <View key={value} style={{
                    borderRadius: 10,
                    margin: 10,
                    // elevation: 10,
                    backgroundColor: '#fff',
                    overflow: 'hidden'
                }}>
                    <View style={{ justifyContent: 'center' }}>
                        <SvgAnimatedLinearGradient height={200} width={width} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                            <Rect x="0" y="0" rx="4" ry="4" width={width} height="200" />
                        </SvgAnimatedLinearGradient>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View>
                            <SvgAnimatedLinearGradient height={65} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                                <Circle cx="15" cy="40" r="15" />
                                <Rect x="40" y="35" rx="4" ry="4" width={200} height="10" />
                            </SvgAnimatedLinearGradient>
                        </View>
                        {/* <HeaderPreloader /> */}
                        <View>
                            <SvgAnimatedLinearGradient height={60} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                                <Rect x="0" y="0" rx="4" ry="4" width={'100%'} height="10" />
                                <Rect x="0" y="20" rx="4" ry="4" width={'100%'} height="10" />
                            </SvgAnimatedLinearGradient>
                        </View>
                    </View>
                    {/* <PaginationPreloader /> */}
                </View>
            ))}
        </View>

    )
}

const BannerPreloader = () => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <SvgAnimatedLinearGradient height={300} width={width} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                <Rect x="0" y="0" rx="4" ry="4" width={width} height="300" />
            </SvgAnimatedLinearGradient>
        </View>
    )
}


const PaginationPreloader = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'row', marginTop: 20 }}>
            <CirclePreloader />
            <CirclePreloader />
            <CirclePreloader />
        </View>
    )
}

const CirclePreloader = () => {
    return (
        <SvgAnimatedLinearGradient>
            <Circle cx="0" cy="0" r="10" />
        </SvgAnimatedLinearGradient>
    )
}


export default HomePreloader;