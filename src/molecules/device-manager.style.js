import styled from 'styled-components/native';
import { COLORS } from '../atoms/palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: 100%;
  height: 126px;
  background: ${COLORS.primary};
  padding: 10px 20px;
`;

export const Graphic = styled.View`
  position: absolute;
  top: 0;
  left: 17%;
  z-index: -1;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Bottom = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;
