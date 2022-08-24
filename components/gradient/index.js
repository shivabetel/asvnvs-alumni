import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View } from "react-native"
import { colors } from "../../styles/colors"

const Gradient = () => {
    return (
        <View>
            <LinearGradient style={styles.gradientContainer} colors={[colors.linearGradientColor100, colors.linearGradientColor200]}></LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    gradientContainer: {
        height: 300
    }
})


export default Gradient;