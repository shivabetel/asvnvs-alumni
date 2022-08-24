import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../styles/colors";

const HeaderLeft = ({ tintColor }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: tintColor}]}>A.S.V.N.V.S</Text>
            <Text style={[styles.text, {color: tintColor}]}>ಎ.ಎಸ್‌.ವಿ.ಎನ್.ವಿ.ಎಸ್</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 2
    },
    text: {
        color: colors.white,
        fontFamily: 'opensans-bold'
    }
})
export default HeaderLeft;