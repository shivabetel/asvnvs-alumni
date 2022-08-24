import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { Text } from 'react-native';

const AppIcon = ({color, size, iconName, ...restOfProps}) => {
    switch(iconName){
        case 'event':
            return <MaterialIcons name="event" size={size} color={color} {...restOfProps}/>
        case 'info':
            return <AntDesign name="infocirlce" size={size} color={color} {...restOfProps} /> 
        case 'donate': 
           return <FontAwesome name="rupee" size={size} color={color}  {...restOfProps}/> 
        default:
            return <Text>no icon found</Text>      
    }
}

export default AppIcon;
