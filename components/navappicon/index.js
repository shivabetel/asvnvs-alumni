import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';

const NavAppIcon = () => {

    const { navigate } = useNavigation();

    const handleOnPress = useCallback(() => {
        navigate("Home")
    }, [navigate])
    return (
        <TouchableOpacity onPress={handleOnPress} style={{paddingHorizontal: 10}}>
            <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} source={require('../../assets/images/logo.jpeg')}></Image>
        </TouchableOpacity>
    )
}


export default NavAppIcon;