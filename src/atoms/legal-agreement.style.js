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

export const ModalWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.white};

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  bottom: 0;
  padding: 20px;
  height: 80%;
  width: 100%;
`;

export const ScreenDimmer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${COLORS.black};
  opacity: 0.25;
`;

export const ModalTitle = styled.View`
  padding: 20px;
`;

export const CloseButton = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
`;
