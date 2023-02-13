import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.Colors.BACKGROUND};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.Colors.TEXT_COLOR};
  font-size: 30px;
`;
