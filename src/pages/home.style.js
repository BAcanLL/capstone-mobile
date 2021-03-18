import styled from 'styled-components/native';
import { COLORS } from '../atoms/palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${COLORS.lightGrey};

  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.View`
  margin-left: 5px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  margin: 5px;
`;

export const ModalButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 80%;
`;
