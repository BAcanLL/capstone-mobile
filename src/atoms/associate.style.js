import styled from 'styled-components/native';
import { COLORS } from './palette';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 20px;
  background: ${COLORS.lightGrey};
`;

export const EditWrapper = styled(Wrapper)`
  height: 32px;
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.color};
  padding: 0px 15px;
`;

export const SmallProfileImage = styled(ProfileImage)`
  height: 22px;
  width: 22px;
  border-radius: 11px;
  margin-right: 15px;
  background: ${COLORS.white};
`;

export const IconWrapper = styled.View`
  padding-left: 10px;
`;

export const CloseWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
