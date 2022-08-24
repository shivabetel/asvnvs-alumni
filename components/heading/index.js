import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../styles/colors"


const fonts = StyleSheet.create({ 
    'heading-l': {
        fontSize: 18,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    },
    'heading-m': {
        fontSize: 16,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    },
    'heading-s': {
        fontSize: 14,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    }
})

const Heading = ({heading, color = colors.primary500, appearance = 'heading-l'}) => {

    return (
        <View>
             <Text style={[fonts[appearance], {color}]}>{heading}</Text>
        </View>
    )
}


export default Heading