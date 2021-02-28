import styled from 'styled-components/native/dist/styled-components.native.esm';
import { COLORS } from './palette';

export const Section = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  position: relative;
  background: ${COLORS.white};
  border-radius: 10px;
  margin: 5px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
`;
