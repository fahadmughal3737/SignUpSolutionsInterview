import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import SignUp from './screens/signup';

const Stack = createNativeStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}
export default AuthStack