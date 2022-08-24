import { ScrollView, View } from "react-native";
import { Circle, Rect } from "react-native-svg";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import BannerPreloader from "../banner";
import HeaderPreloader from "../header"
import TextPreloader from "../text"

const EventsPreloader = () => {
    return (
        <ScrollView style={{ padding: 10 }}>

            {
                [1, 2].map((value) => (
                    <View key={value}>
                        <HeaderPreloader />
                        <BannerPreloader />
                        <SvgAnimatedLinearGradient height={60} width={'100%'} primaryColor="#dcd8d8" secondaryColor="#f3f3f3">
                            <Rect x="0" y="20" rx="4" ry="4" width={'100%'} height="10" />
                            <Rect x="0" y="40" rx="4" ry="4" width={'100%'} height="10" />
                        </SvgAnimatedLinearGradient>
                    </View>
                ))
            }
        </ScrollView>
    )
}

export default EventsPreloader;