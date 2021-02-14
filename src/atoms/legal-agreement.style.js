import styled from 'styled-components/native';
import { COLORS } from './palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 275px;
`;

export const CheckBox = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 3px;
  border-width: 2px;
  border-color: ${COLORS.white};
  ${(props) => props.checked && 'background: ' + COLORS.white + ';'}
`;

export const TextWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  padding-left: 10px;
`;
