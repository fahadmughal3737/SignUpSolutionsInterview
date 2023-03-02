import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth/authStack';
import {Text} from 'react-native'
const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}
export default AppNavigator