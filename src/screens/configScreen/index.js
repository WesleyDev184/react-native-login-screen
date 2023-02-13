import { Container, Title } from './styles';
import { Switch } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { useTheme } from 'styled-components';
import ButtonComponent from '../../components/buttonCustom';
import { useAuth } from '../../contexts/authContext';

const ConfigScreen = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { Colors } = useTheme();
  const { auth, changeAuth } = useAuth();

  const darkTheme = theme === 'dark';

  return (
    <Container>
      <Title>
        {theme} ... {auth}
      </Title>
      <Switch
        onChange={changeTheme}
        value={darkTheme}
        thumbColor={darkTheme ? Colors.SECONDARY_COLOR : Colors.TERTIARY_COLOR}
        trackColor={{ false: Colors.PRIMARY_COLOR, true: Colors.PRIMARY_COLOR }}
        ios_backgroundColor={Colors.PRIMARY_COLOR}
      />
      <ButtonComponent title={'SingOut'} onPress={changeAuth} />
    </Container>
  );
};

export default ConfigScreen;
