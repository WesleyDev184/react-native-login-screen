import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen';
import ConfigScreen from '../screens/configScreen';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Configuration" component={ConfigScreen} />
    </Stack.Navigator>
  );
};
