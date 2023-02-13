import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, createContext, useContext } from 'react';

export const AuthContext = createContext({
  theme: 'false',
  /* A function that changes the Auth. */
  changeAuth: () => {},
});

const AuthAppProvider = ({ children }) => {
  const [auth, setAuth] = useState('true');
  const authState = auth === 'true' ? 'false' : 'true';

  const changeAuth = async () => {
    await AsyncStorage.setItem('@Auth', authState);
    getData();

    if (auth === 'true') {
      setAuth('true');
    } else {
      setAuth('false');
    }
  };

  const getData = async () => {
    const res = await AsyncStorage.getItem('@Auth');
    if (res) {
      setAuth(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <AuthContext.Provider value={{ auth, changeAuth }}>{children}</AuthContext.Provider>;
};

export default AuthAppProvider;

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    console.log('useAuth must be used within an AuthProvider');
  }

  return context;
}
