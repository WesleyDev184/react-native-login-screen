import { useNavigation } from '@react-navigation/native';
import { Container, Title, Button } from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Home</Title>
      <Button title="Go to Config" onPress={() => navigation.navigate('Configuration')} />
    </Container>
  );
};

export default Home;
