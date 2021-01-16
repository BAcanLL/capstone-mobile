import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};
  width: ${(props) => (props.round ? props.height : 'fit-content')};
  height: ${(props) => props.height + 'px'};
  border-radius: 19px;
  padding: 0px ${(props) => (props.round ? '0px' : '16px')};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  ${(props) => props.pressed && 'filter: brightness(0.85);'}
`;

export const IconWrapper = styled.View`
  padding-left: ${(props) => (props.round ? '0px' : '10px')};
`;
