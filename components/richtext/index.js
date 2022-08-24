import { StyleSheet, Text, View } from "react-native"

const fonts = StyleSheet.create({ 
    'text-l': {
        fontSize: 18,
        fontFamily: "opensans-regular",
        paddingVertical: 10
    },
    'text-l-bold': {
        fontSize: 18,
        fontFamily: "opensans-bold",
        paddingVertical: 10
    },
    'text-m': {
        fontSize: 16,
        fontFamily: "opensans-regular",
        paddingVertical: 10
    },
    'text-m-bold': {
        fontSize: 16,
        fontFamily: "opensans-bold",
        paddingVertical: 10
    },
    'text-s': {
        fontSize: 14,
        fontFamily: "opensans-regular",
        paddingVertical: 10
    },
    'text-s-bold': {
        fontSize: 14,
        fontFamily: "opensans-bold",
        paddingVertical: 10
    }
})
const RichText = ({text, color, appearance = 'text-s', style}) => {
    return (
        <View>
            <Text style={[fonts[appearance], {color}, {...style}]}>{text}</Text>
        </View>
    )
}

export default RichText;