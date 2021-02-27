import React from 'react';
import { FieldWrapper, Wrapper } from './onboarding-fields.style';
import { FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';
import Field from '../atoms/field';

const OnboardingFields = {};

const EMAIL = 'Email';
const EMAIL_PLACEHOLDER = 'e.g. example@example.com';
const PASSWORD = 'Password';
const PASSWORD_PLACEHOLDER =
  'e.g. \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022';
const CONFIRM_PASSWORD = 'Confirm Password';

const FIRST_NAME = 'First Name';
const FIRST_NAME_PLACEHOLDER = 'e.g. Alex';
const LAST_NAME = 'Last Name';
const LAST_NAME_PLACEHOLDER = 'e.g. Johnson';
const BIRTHDAY = 'Birthday';
const BIRTHDAY_PLACEHOLDER = 'Enter your birthday date';
const HEIGHT = 'Height';
const HEIGHT_PLACEHOLDER = 'Enter your height in cm';
const WEIGHT = 'Weight';
const WEIGHT_PLACEHOLDER = 'Enter your weight in kg';

const textColor = COLORS.white;
const textWeight = FONT_WEIGHTS.bold;

const fieldConfig = {
  textColor,
  placeholderTextColor: COLORS.lightGreen,
  color: COLORS.lightGreen,
};

const Authentication = ({
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
}) => {
  return (
    <Wrapper>
      <TextView color={textColor} weight={textWeight}>
        {EMAIL}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onEmailChange}
          value={emailValue}
          placeholder={EMAIL_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {PASSWORD}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onPasswordChange}
          value={passwordValue}
          placeholder={PASSWORD_PLACEHOLDER}
          {...fieldConfig}
          secure
        />
      </FieldWrapper>
    </Wrapper>
  );
};

const Registration = ({
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
  confirmPasswordValue,
  onConfirmPasswordChange,
}) => {
  return (
    <Wrapper>
      <TextView color={textColor} weight={textWeight}>
        {EMAIL}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onEmailChange}
          value={emailValue}
          placeholder={EMAIL_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {PASSWORD}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onPasswordChange}
          value={passwordValue}
          placeholder={PASSWORD_PLACEHOLDER}
          {...fieldConfig}
          secure
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {CONFIRM_PASSWORD}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onConfirmPasswordChange}
          value={confirmPasswordValue}
          placeholder={PASSWORD_PLACEHOLDER}
          {...fieldConfig}
          secure
        />
      </FieldWrapper>
    </Wrapper>
  );
};

const Profiling = ({
  firstNameValue,
  onFirstNameChange,
  lastNameValue,
  onLastNameChange,
  birthdayValue,
  onBirthdayChange,
  heightValue,
  onHeightChange,
  weightValue,
  onWeightChange,
}) => {
  return (
    <Wrapper>
      <TextView color={textColor} weight={textWeight}>
        {FIRST_NAME}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onFirstNameChange}
          value={firstNameValue}
          placeholder={FIRST_NAME_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {LAST_NAME}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onLastNameChange}
          value={lastNameValue}
          placeholder={LAST_NAME_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {BIRTHDAY}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onBirthdayChange}
          value={birthdayValue}
          placeholder={BIRTHDAY_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {HEIGHT}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onHeightChange}
          value={heightValue}
          placeholder={HEIGHT_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
      <TextView color={textColor} weight={textWeight}>
        {WEIGHT}
      </TextView>
      <FieldWrapper>
        <Field
          onChange={onWeightChange}
          value={weightValue}
          placeholder={WEIGHT_PLACEHOLDER}
          {...fieldConfig}
        />
      </FieldWrapper>
    </Wrapper>
  );
};

OnboardingFields.Authentication = Authentication;
OnboardingFields.Registration = Registration;
OnboardingFields.Profiling = Profiling;

export default OnboardingFields;
