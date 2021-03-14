import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 350px;
  border-radius: 35px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  margin: 3px;
`;

export const CloseButton = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 8px;
`;
