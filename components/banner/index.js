import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";

import Gradient from "../gradient";
import AppImage from "../image";

const { width } = Dimensions.get('window')

const Banner = ({ banner, imageStyle,  onPress = () => {} }) => {
    return (
        <View style={styles.banner}>
            {/* {!banner?.bannerImage && <Gradient />} */}
            <Pressable onPress={() => onPress(banner?.target)}>
                {banner?.bannerImage && <AppImage style={[styles.image, imageStyle]} resizeMode="cover" source={{uri: banner?.bannerImage}} />}
            </Pressable>
        </View>
    )
}


export default Banner;

const styles = StyleSheet.create({
    banner: {
        position: "relative",
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradientContainer: {
        height: 300
    },
    content: {
        padding: 10
    },
    heading: {
        fontSize: 18,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    },
    text: {
        fontSize: 14,
        fontFamily: 'opensans-regular'
    },
    image: {
        width,
        height: 300
    }
})