import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { themes } from '../../src/themes';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {},
});

const ThemeAppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeState = theme === 'dark' ? 'light' : 'dark';

  const changeTheme = async () => {
    await AsyncStorage.setItem('@Theme', themeState);
    getData();

    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const getData = async () => {
    const res = await AsyncStorage.getItem('@Theme');
    if (res) {
      setTheme(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <StatusBar style={themeState} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeAppProvider;
