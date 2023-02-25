import { useState, useEffect } from 'react';
import { Container, LogoContainer, InputContainer } from './styles';
import InputComponent from '../../components/inputCustom';
import ButtonComponent from '../../components/buttonCustom';
import { Alert } from 'react-native';
import { useAuth } from '../../contexts/authContext';
import { Animated } from 'react-native';
import LogoImage from '../../img/logo_svg';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const { changeAuth } = useAuth();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const singIn = () => {
    if (username != '' && password != '') {
      changeAuth();
    } else {
      Alert.alert('Aviso', 'preencha todos os campos');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <InputContainer style={[{ transform: [{ translateY: offset.y }] }]}>
        <InputComponent
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <InputComponent
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonComponent title={'Login'} onPress={singIn} />
      </InputContainer>
    </Container>
  );
};

export default LoginScreen;
