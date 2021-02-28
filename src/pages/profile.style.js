import styled from 'styled-components/native/dist/styled-components.native.esm';
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

export const Body = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const SignOut = styled.View`
  padding-top: 20px;
`;
