import styled from 'styled-components/native';
import { COLORS } from './palette';
import { textStyle } from './typography';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.TextInput`
  ${textStyle}
  border-radius: 5px;
  border: 1px solid ${COLORS.lightGrey};
  width: 311px;
  height: ${(props) => (props.expanded ? '314px' : '68px')};
  padding: 5px;
`;

export const MenuWrapper = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60px;
`;
