import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.Colors.TERTIARY_COLOR};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
`;
