import styled from 'styled-components/native';
import { brightness } from './palette';

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.pressed ? brightness(props.color, 0.85) : props.color};
  width: ${(props) => (props.round ? props.height : 'auto')};
  height: ${(props) => props.height + 'px'};
  border-radius: 19px;
  padding: 0px ${(props) => (props.round ? '0px' : '16px')};
  ${(props) => props.shadow && 'box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);'}
`;

export const IconWrapper = styled.View`
  padding-left: ${(props) => (props.round ? '0px' : '10px')};
`;
