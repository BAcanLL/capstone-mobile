import styled from 'styled-components/native';
import { textStyle } from './typography';

export const FieldInput = styled.TextInput`
  ${textStyle}
  border: 0px solid ${(props) => props.borderColor};
  border-left-width: ${(props) => props.borderLeft};
  border-top-width: ${(props) => props.borderTop};
  border-right-width: ${(props) => props.borderRight};
  border-bottom-width: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.borderRadius}
  height: 30px;
  padding: 5px;
`;
