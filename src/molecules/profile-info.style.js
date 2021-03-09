import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 16px 25px;
  min-height: 300px;
  max-height: 100%;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 20px 0px;
`;

export const InfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 0px;
`;

export const Key = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 80px;
  margin-right: 30px;
`;

export const Value = styled.View`
  flex: 1;
`;

export const TherapistWrapper = styled.View`
  padding: 10px 20px;
`;

// Editor

export const EditWrapper = styled(Wrapper)`
  height: auto;
`;

export const EditInfo = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 10px 0px;
`;

export const SectionHeader = styled.View`
  align-items: center;
  width: 100%;
`;

export const Request = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 20px;
  width: 100%;
`;

export const FieldWrapper = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const EditTherapistList = styled.ScrollView`
  display: flex;
  width: 100%;
  height: 75px;
`;

export const EditTherapistWrapper = styled.View`
  width: 100%;
  padding-bottom: 5px;
`;

export const ConfirmButtons = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
`;

export const DeleteButton = styled.View`
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
