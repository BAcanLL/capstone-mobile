import styled from 'styled-components/native';
import { COLORS } from '../atoms/palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${COLORS.primary};

  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex: 0 0 35%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const ContinueButton = styled.View`
  padding-top: 25px;
  padding-bottom: 10px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 10%;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
