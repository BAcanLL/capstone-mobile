import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};
  width: fit-content;
  height: 38px;
  border-radius: 19px;
  padding: 0px 15px;

  ${(props) => props.pressed && 'filter: brightness(0.85);'}

  & > svg {
    padding-left: 5px;
  }
`;
