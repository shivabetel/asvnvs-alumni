import { Animated, StyleSheet, View } from "react-native"

const AppImage = ({ style, source, ...restofProps }) => {

    const defaultImageAnimated = new Animated.Value(0);
    const imageAnimated = new Animated.Value(0);


    const handleDefaultImageLoad = () => {
        Animated.timing(defaultImageAnimated, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    const handleImageLoad = () => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    }


    return (
        <View>
            <Animated.Image
                source={require('../../assets/images/imagepreloader.png')}
                style={[style, { opacity: defaultImageAnimated }]}
                onLoad={handleDefaultImageLoad}
                blurRadius={1}
                {...restofProps} />
            <Animated.Image
                source={source}
                style={[style, { opacity: imageAnimated }, styles.imageOverLay]}
                onLoad={handleImageLoad}
                {...restofProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageOverLay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})


export default AppImage;