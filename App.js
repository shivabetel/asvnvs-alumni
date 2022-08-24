import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import BottomTab from './components/bottomtab';
import AppDrawer from './components/drawer';

const Stack = createStackNavigator();

// const BottomTab = createBottomTabNavigator()
// const drawerNavigator = new DrawerNavigator({
//    Home: {
//     screen: () => <></>
//    },
//    About: {
//     screen: () => <></>
//    }

// })
// screenOptions={{
//   // drawerStyle: {
//   //   backgroundColor: colors.primary100
//   // },
//   drawerType: "front",
//   drawerActiveTintColor: colors.primary100,
//   // headerBackground: (style) => {
//   //   console.log("style:",style)
//   // },
//   headerStyle: {
//     backgroundColor: colors.primary100
//   },
//   // headerBackgroundContainerStyle: {
//   //   backgroundColor: colors.primary100
//   //   // borderColor: colors.primary100,
//   //   //  shadowColor: colors.primary100,
//   //   //  shadowOpacity: 1
//   // },
//   headerTintColor: colors.white
//   // overlayColor: colors.primary100
//   // drawerIcon: () => ({
//   //   color: colors.primary100
//   // })
// }}
export default function App() {
  const [fontsLoaded] = useFonts({
    'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'opensans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'opensans-extra-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='drawer' component={BottomTab} options={{ headerShown: false }} />

      </Stack.Navigator> */}

      <BottomTab/>
      <StatusBar style='dark' />
      {/* <BottomTab.Navigator initialRouteName='About' screenOptions={{

        headerStyle: { backgroundColor: colors.primary500 },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.primary500
      }}>
        <BottomTab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
        }} />
        <BottomTab.Screen name='About' component={About} options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="infocirlceo" size={size} color={color} />
        }} />
        <BottomTab.Screen name='Donate' component={Donate} options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='rupee' size={size} color={color} />
        }} />
        <BottomTab.Screen name='Events' component={Events} options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event" size={size} color={color} />
        }} />

      </BottomTab.Navigator> */}
    </NavigationContainer>

  );
}

