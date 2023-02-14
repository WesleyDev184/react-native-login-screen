import { useState } from 'react';
import { Container } from '../homeScreen/styles';
import InputComponent from '../../components/inputCustom';
import ButtonComponent from '../../components/buttonCustom';
import { Alert } from 'react-native';
import { useAuth } from '../../contexts/authContext';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { changeAuth } = useAuth();

  const singIn = () => {
    if (username != '' && password != '') {
      changeAuth();
    } else {
      Alert.alert('Aviso', 'preencha todos os campos');
    }
  };

  return (
    <Container>
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
    </Container>
  );
};

export default LoginScreen;
