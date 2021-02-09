import React from 'react';
import { Wrapper } from './onboarding-fields.style';
import { FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';

const OnboardingFields = {};

const EMAIL = 'Email';
// const PASSWORD = 'Password';
// const CONFIRM_PASSWORD = 'Confirm Password';

const textColor = COLORS.white;
const textWeight = FONT_WEIGHTS.bold;

const Authentication = () => {
  return (
    <Wrapper>
      <TextView color={textColor} weight={textWeight}>
        {EMAIL}
      </TextView>
    </Wrapper>
  );
};

OnboardingFields.Authentication = Authentication;

export default OnboardingFields;
