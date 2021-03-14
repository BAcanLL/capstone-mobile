import styled from 'styled-components/native';
import { COLORS } from './palette';

export const ModalWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.white};

  border-radius: 10px;
  bottom: 40%;
  padding: 20px;
  margin-left: 14%;
  height: 232px;
  width: 70%;
`;

export const ModalContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScreenDimmer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${COLORS.black};
  opacity: 0.25;
`;
