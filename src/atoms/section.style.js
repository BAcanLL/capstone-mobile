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
  width: 100%;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 120px;
  background: ${COLORS.primary};
  padding: 0px 10px;
  padding-top: 50px;
`;
