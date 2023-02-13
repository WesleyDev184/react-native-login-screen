import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/singInScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SingIn" component={SingInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
