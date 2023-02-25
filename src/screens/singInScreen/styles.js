import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.Colors.BACKGROUND};
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.Colors.TEXT_COLOR};
  font-size: 30px;
`;

export const LogoContainer = styled.View`
  margin-bottom: 60px;
`;

export const InputContainer = styled(Animated.View)`
  width: 100%;
  display: flex;
  align-items: center;
`;
