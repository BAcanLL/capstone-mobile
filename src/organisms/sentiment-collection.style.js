import styled from 'styled-components/native';
import { COLORS } from '../atoms/palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  position: relative;
  height: 100%;
  background: ${COLORS.white};
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
`;

export const TextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 15px;
`;

export const ContentWrapper = styled.View`
  padding: 14px 0 20px 0px;
`;

export const ExpandButton = styled.Pressable`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  height: 20px;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${COLORS.lightGrey};
  background: white;
  ${(props) => props.pressed && 'filter: brightness(0.98);'}
`;
