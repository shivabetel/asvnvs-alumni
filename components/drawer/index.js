import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import About from "../../screens/about";
import Donate from "../../screens/donate";
import Events from '../../screens/events';
import Home from "../../screens/home";
import { colors } from "../../styles/colors";
import globalStyles from '../../styles/global';
import BottomTab from '../bottomtab';
import NavAppIcon from '../navappicon';

const Drawer = createDrawerNavigator();


const DrawerContent = (props) => {
    const { navigation: {toggleDrawer} } = props;
    return (
        <View style={[globalStyles.flexGrow, drawerContentStyles.container]}>
            <View style={drawerContentStyles.imageContainer}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Image style={drawerContentStyles.logo} source={require('../../assets/images/logo.jpeg')} />
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </View>
    )
}

const drawerContentStyles = StyleSheet.create({
    container: {
        // marginVertical: 40
    },
    imageContainer: {
        padding: 10,
        borderColor: colors.primary200,
        borderBottomWidth: 1,
        backgroundColor: colors.primary200,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40
    }
})

const AppDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContent} initialRouteName='Home' screenOptions={{
            drawerType: "front",
            headerStyle: { backgroundColor: colors.primary500 },
            headerTintColor: colors.white,
            headerRight: ({ tintColor }) => <NavAppIcon/>,
            headerTitleAlign: 'center',
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.primary500,
            drawerActiveBackgroundColor: colors.primary500,

            //headerAc
        }}>
            <Drawer.Screen name='Home' component={Home} options={{
                drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
            }} />
            {/* <Drawer.Screen name='Home' component={BottomTab} options={{
                drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
            }}/> */}
            <Drawer.Screen name='About' component={About} options={{
                drawerIcon: ({ color, size }) => <AntDesign name="infocirlceo" size={size} color={color} />
            }} />
            {/* <Drawer.Screen name='Donate' component={Donate} options={{
              drawerIcon: ({ color, size }) => <FontAwesome name='rupee' size={size} color={color} />
            }} /> */}
            <Drawer.Screen name='Events' component={Events} options={{
              drawerIcon: ({ color, size }) => <MaterialIcons name="event" size={size} color={color} />
            }} />
            <Drawer.Screen name='Donate' component={Donate} options={{
                drawerIcon: ({ color, size }) => <FontAwesome5 name='rupee-sign' size={size} color={color} />                
            }} />
        </Drawer.Navigator>
    )
}


export default AppDrawer;