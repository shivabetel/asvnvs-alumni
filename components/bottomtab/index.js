import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import About from '../../screens/about';
import Donate from '../../screens/donate';
import Events from '../../screens/events';
import Home from "../../screens/home";
import { colors } from '../../styles/colors';
import HeaderLeft from '../headerleft';
import NavAppIcon from '../navappicon';

const bottmTab = createBottomTabNavigator()
const BottomTab = () => {

    console.log("bottom tab")
    return (
        <bottmTab.Navigator screenOptions={{
            headerRight: ({ tintColor }) => <NavAppIcon/>,
            headerLeft: ({tintColor}) => <HeaderLeft tintColor={tintColor}/>,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: colors.primary500, height: 100 },
            headerTintColor: colors.white,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.primary200,
            tabBarStyle:{backgroundColor: colors.primary500}
        }}>
            <bottmTab.Screen name="Home" component={Home}  options={{
                // headerShown: false,
                tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
            }}></bottmTab.Screen>
            <bottmTab.Screen name='About' component={About} options={{
                tabBarIcon: ({ color, size }) => <AntDesign name="infocirlceo" size={size} color={color} />
            }} />
            <bottmTab.Screen name='Donate' component={Donate} options={{
                tabBarIcon: ({ color, size }) => <FontAwesome name='rupee' size={size} color={color} />
            }} />
            <bottmTab.Screen name='Events' component={Events} options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="event" size={size} color={color} />
            }} />
        </bottmTab.Navigator>
    )
}

export default BottomTab;