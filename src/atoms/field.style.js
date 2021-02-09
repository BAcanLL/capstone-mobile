import styled from 'styled-components/native';
import { textStyle } from './typography';

export const FieldInput = styled.TextInput`
  ${textStyle}
  border: 0px solid ${(props) => props.borderColor};
  border-bottom-width: 1px;
  flex: 1;
  height: 30px;
  padding: 5px;
`;
