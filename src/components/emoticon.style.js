import styled from 'styled-components/native';

export const ShadowWrapper = styled.View`
  margin-top: ${(props) => (props.pressed ? '5px' : '0px')};
  border-radius: 50px;
`;
