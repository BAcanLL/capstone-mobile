import styled from 'styled-components/native';
import { colors } from './palette';

export const ButtonWrapper = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
  width: fit-content;
  height: 38px;
  border-radius: 19px;
  padding: 0px 15px;
`;
