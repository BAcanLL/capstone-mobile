import React from 'react';
import { Section } from '../atoms/section.style';
import {
  ConfirmButtons,
  DeleteButton,
  EditInfo,
  EditTherapistList,
  EditTherapistWrapper,
  EditWrapper,
  FieldWrapper,
  Info,
  InfoItem,
  Key,
  Request,
  SectionHeader,
  TherapistWrapper,
  Value,
  Wrapper,
} from './profile-info.style';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';
import moment from 'moment';
import Associate from '../atoms/associate';
import Field, { FIELD_TYPES } from '../atoms/field';
import Button, { BUTTON_SIZES } from '../atoms/button';
import { View } from 'react-native';

// TODO: Clean this up into smaller components after time crunch

const TITLE = 'My Profile';

const FIRST_NAME = 'First Name';
const LAST_NAME = 'Last Name';
const EMAIL = 'Email';
const BIRTHDAY = 'Birthday';
const HEIGHT = 'Height';
const WEIGHT = 'Weight';

const THERAPISTS = 'Therapists';

const EDIT_TITLE = 'Edit My Profile';
const CHANGE_PASSWORD = 'Change Your Password';
const NEW = 'New';
const CONFIRM = 'Confirm';
const MANAGE_THERAPISTS = 'Manage My Therapists';
const THERAPIST_CODE = 'Enter a therapist code';
const ADD = 'Add';
const CANCEL = 'Cancel';
const DELETE_ACCOUNT = 'Delete My Account';
const DELETE = 'Delete';

const KeyValuePair = ({ itemKey, itemValue }) => (
  <InfoItem>
    <Key>
      <TextView color={COLORS.primary}>{itemKey}</TextView>
    </Key>
    <Value>
      <TextView weight={FONT_WEIGHTS.regular}>{itemValue}</TextView>
    </Value>
  </InfoItem>
);

const EditableKeyValuePair = ({ itemKey, itemValue, onChange, secure }) => (
  <InfoItem>
    <Key>
      <TextView color={COLORS.primary}>{itemKey}</TextView>
    </Key>
    <Value>
      <Field onChange={onChange} value={itemValue} secure={secure} />
    </Value>
  </InfoItem>
);

const ProfileInfo = ({
  firstName,
  lastName,
  email,
  birthday,
  height,
  weight,
  therapists,
}) => {
  const formattedBirthday = moment(birthday).format('YYYY-MM-DD');
  const hasTherapists = Array.isArray(therapists) && therapists.length > 0;
  return (
    <Section>
      <Wrapper>
        <TextView size={FONT_SIZES.large}>{TITLE}</TextView>
        <Info>
          <KeyValuePair itemKey={FIRST_NAME} itemValue={firstName} />
          <KeyValuePair itemKey={LAST_NAME} itemValue={lastName} />
          <KeyValuePair itemKey={EMAIL} itemValue={email} />
          <KeyValuePair itemKey={BIRTHDAY} itemValue={formattedBirthday} />
          <KeyValuePair itemKey={HEIGHT} itemValue={height} />
          <KeyValuePair itemKey={WEIGHT} itemValue={weight} />
        </Info>
        {hasTherapists && <TextView>{THERAPISTS}</TextView>}
        {hasTherapists &&
          therapists.map((t, i) => (
            <TherapistWrapper key={i}>
              <Associate {...t} key={t.id} />
            </TherapistWrapper>
          ))}
      </Wrapper>
    </Section>
  );
};

const EditProfileInfo = ({
  firstName,
  lastName,
  email,
  birthday,
  height,
  weight,
  therapists,
  newPassword,
  confirmPassword,

  onFirstNameChange = () => {},
  onLastNameChange = () => {},
  onEmailChange = () => {},
  onBirthdayChange = () => {},
  onHeightChange = () => {},
  onWeightChange = () => {},
  onPasswordChange = () => {},
  onConfirmPasswordChange = () => {},

  onAddTherapist = () => {},
  onDeleteTherapist = () => {},
  onCancelPress = () => {},
  onConfirmPress = () => {},
  onDeletePress = () => {},
}) => {
  const formattedBirthday = moment(birthday).format('YYYY-MM-DD');
  const hasTherapists = Array.isArray(therapists) && therapists.length > 0;
  return (
    <Section>
      <EditWrapper>
        <TextView size={FONT_SIZES.large}>{EDIT_TITLE}</TextView>
        <EditInfo>
          <EditableKeyValuePair
            itemKey={FIRST_NAME}
            itemValue={firstName}
            onChange={onFirstNameChange}
          />
          <EditableKeyValuePair
            itemKey={LAST_NAME}
            itemValue={lastName}
            onChange={onLastNameChange}
          />
          <EditableKeyValuePair
            itemKey={EMAIL}
            itemValue={email}
            onChange={onEmailChange}
          />
          <EditableKeyValuePair
            itemKey={BIRTHDAY}
            itemValue={formattedBirthday}
            onChange={onBirthdayChange}
          />
          <EditableKeyValuePair
            itemKey={HEIGHT}
            itemValue={height}
            onChange={onHeightChange}
          />
          <EditableKeyValuePair
            itemKey={WEIGHT}
            itemValue={weight}
            onChange={onWeightChange}
          />
        </EditInfo>
        <SectionHeader>
          <TextView color={COLORS.grey} weight={FONT_WEIGHTS.regular}>
            {CHANGE_PASSWORD}
          </TextView>
        </SectionHeader>
        <EditInfo>
          <EditableKeyValuePair
            itemKey={NEW}
            itemValue={newPassword}
            secure
            onChange={onPasswordChange}
          />
          <EditableKeyValuePair
            itemKey={CONFIRM}
            itemValue={confirmPassword}
            onChange={onConfirmPasswordChange}
            secure
          />
        </EditInfo>
        <SectionHeader>
          <TextView color={COLORS.grey} weight={FONT_WEIGHTS.regular}>
            {MANAGE_THERAPISTS}
          </TextView>
        </SectionHeader>
        <Request>
          <FieldWrapper>
            <Field placeholder={THERAPIST_CODE} type={FIELD_TYPES.bordered} />
          </FieldWrapper>
          <Button
            onPress={onAddTherapist}
            text={ADD}
            color={COLORS.highlight}
          />
        </Request>
        {hasTherapists && (
          <>
            <EditTherapistList>
              {therapists.map((t, i) => (
                <EditTherapistWrapper key={i}>
                  <Associate.Edit
                    {...t}
                    key={t.id}
                    onDeletePress={() => onDeleteTherapist(t, i)}
                  />
                </EditTherapistWrapper>
              ))}
            </EditTherapistList>
          </>
        )}
        <SectionHeader>
          <ConfirmButtons>
            <Button onPress={onCancelPress} text={CANCEL} color={COLORS.grey} />
            <Button
              onPress={onConfirmPress}
              text={CONFIRM}
              color={COLORS.primary}
            />
          </ConfirmButtons>
        </SectionHeader>
        <View style={{ flex: 1 }} />
        <SectionHeader>
          <TextView color={COLORS.grey} weight={FONT_WEIGHTS.regular}>
            {DELETE_ACCOUNT}
          </TextView>
        </SectionHeader>
        <DeleteButton>
          <Button
            onPress={onDeletePress}
            text={DELETE}
            color={COLORS.red}
            size={{ ...BUTTON_SIZES.large, shadow: false }}
          />
        </DeleteButton>
      </EditWrapper>
    </Section>
  );
};

export default ProfileInfo;
ProfileInfo.Edit = EditProfileInfo;
