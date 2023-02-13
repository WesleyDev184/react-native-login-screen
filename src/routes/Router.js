import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/authContext';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const Router = () => {
  const { auth } = useAuth();
  let Auth = auth == 'true';
  return <NavigationContainer>{Auth ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};
