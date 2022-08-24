import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../styles/colors";


const sizes = StyleSheet.create({
    large: {
        fontSize: 18,
        fontFamily: 'opensans-regular',
        width: '100%',
        maxWidth: '100%'
    },
    medium: {
        fontSize: 16,
        fontFamily: 'opensans-regular',
        width: '100%',
        maxWidth: '100%'
    },
    small: {
        fontSize: 14,
        fontFamily: 'opensans-regular',
        width: '100%',
        maxWidth: '100%'
    }
})

const buttonColors = StyleSheet.create({
    primary: {
        backgroundColor: colors.primary500          
    }
})

const textColors = StyleSheet.create({
    primary: {
        color: colors.white
    },
    secondary: {
        color: colors?.primary500,
        fontFamily: 'opensans-bold'
    }
})

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        width: '100%',
        maxWidth: '100%',
        alignItems: 'center'
    }
})

const Button = ({ title, kind = "primary", size = 'medium', onPress }) => {
    
    return (
        <Pressable android_ripple={{color: colors.white}} onPress={onPress} style={[styles.button,buttonColors[kind]]}>
            <View>
                <Text style={[sizes[size], textColors[kind]]}>{title}</Text>
            </View>
        </Pressable>
    )
}


export default Button