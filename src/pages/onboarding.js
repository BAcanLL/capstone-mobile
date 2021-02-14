import React, { useContext } from 'react';
import {
  ContinueButton,
  Footer,
  Header,
  TextWrapper,
  Wrapper,
} from './onboarding.style';
import OnboardingFields from '../molecules/onboarding-fields';
import { observer, useLocalStore } from 'mobx-react';
import OnboardingStore, { ONBOARDING_STATES } from './onboarding.store';
import LogoWithShadow from '../atoms/logo';
import Button, { BUTTON_SIZES } from '../atoms/button';
import { COLORS } from '../atoms/palette';
import LegalAgreement from '../atoms/legal-agreement';
import { FONT_WEIGHTS, TextView } from '../atoms/typography';
import { RootStoreContext } from '../index';

const SIGN_IN = 'Sign In';
const REGISTER = 'Register';
const FORGOT_PASSWORD = 'Forgot Password?';
const CONTINUE = 'Continue';
const EXISTING_ACCOUNT = 'Have an Account?';
const BACK = 'Back';

const buttonProps = {
  color: COLORS.white,
  textColor: COLORS.primary,
  size: { ...BUTTON_SIZES.regular, height: 38, width: 100 },
};

const Onboarding = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const store = useLocalStore(OnboardingStore, { rootStore });

  return (
    <Wrapper>
      <Header>
        <LogoWithShadow scale={1.2} />
      </Header>
      {store.state === ONBOARDING_STATES.AUTHENTICATION && (
        <>
          <OnboardingFields.Authentication
            emailValue={store.email}
            onEmailChange={store.onEmailChange}
            passwordValue={store.password}
            onPasswordChange={store.onPasswordChange}
          />
          <ContinueButton>
            <Button
              onPress={store.onContinueClick}
              text={SIGN_IN}
              {...buttonProps}
            />
          </ContinueButton>
          <Button
            onPress={store.onForgotPasswordClick}
            text={FORGOT_PASSWORD}
          />
        </>
      )}
      {store.state === ONBOARDING_STATES.REGISTRATION && (
        <>
          <OnboardingFields.Registration
            emailValue={store.registrationEmail}
            onEmailChange={store.onRegistrationEmailChange}
            passwordValue={store.registrationPassword}
            onPasswordChange={store.onRegistrationPasswordChange}
            confirmPasswordValue={store.registrationPasswordConfirm}
            onConfirmPasswordChange={store.onRegistrationPasswordConfirmChange}
          />
          <LegalAgreement
            checked={store.TOSAgreement}
            onPress={store.toggleTOSAgreement}
            onTOSClick={store.onTOSClick}
            onPPClick={store.onPPClick}
          />
          <ContinueButton>
            <Button
              onPress={store.onContinueClick}
              text={CONTINUE}
              {...buttonProps}
            />
          </ContinueButton>
        </>
      )}
      {store.state === ONBOARDING_STATES.PROFILING && (
        <>
          <OnboardingFields.Profiling
            firstNameValue={store.firstName}
            onFirstNameChange={store.onFirstNameChange}
            lastNameValue={store.lastName}
            onLastNameChange={store.onLastNameChange}
            birthdayValue={store.birthday}
            onBirthdayChange={store.onBirthdayChange}
            heightValue={store.height}
            onHeightChange={store.onHeightChange}
            weightValue={store.weight}
            onWeightChange={store.onWeightChange}
          />
          <ContinueButton>
            <Button
              onPress={store.onContinueClick}
              text={REGISTER}
              {...buttonProps}
            />
          </ContinueButton>
        </>
      )}
      <Footer>
        {store.state === ONBOARDING_STATES.AUTHENTICATION && (
          <Button
            onPress={store.onFooterClick}
            text={REGISTER}
            size={BUTTON_SIZES.subtle}
          />
        )}
        {store.state === ONBOARDING_STATES.REGISTRATION && (
          <TextWrapper>
            <TextView weight={FONT_WEIGHTS.regular} color={COLORS.white}>
              {EXISTING_ACCOUNT}
            </TextView>
            <Button
              onPress={store.onFooterClick}
              text={SIGN_IN}
              size={BUTTON_SIZES.subtle}
            />
          </TextWrapper>
        )}
        {store.state === ONBOARDING_STATES.PROFILING && (
          <Button
            onPress={store.onFooterClick}
            text={BACK}
            size={BUTTON_SIZES.subtle}
          />
        )}
      </Footer>
    </Wrapper>
  );
});

export default Onboarding;
