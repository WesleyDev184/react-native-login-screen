import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 85%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: gray;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
  color: #000;
`;
