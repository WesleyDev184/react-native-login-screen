import { Button, Title } from './styles';

const ButtonComponent = (props) => {
  return (
    <Button {...props}>
      <Title>{props.title}</Title>
    </Button>
  );
};

export default ButtonComponent;
