import styled from 'styled-components/native';
import { brightness, COLORS } from '../atoms/palette';

export const TextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 15px;
`;

export const ContentWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;

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
  background: ${(props) =>
    props.pressed ? brightness(COLORS.white, 0.98) : 'white'};
`;

export const TimerWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${COLORS.white};
`;
