import React from 'react';
import { Wrapper } from './onboarding.style';
import OnboardingFields from '../molecules/onboarding-fields';
import { observer, useLocalStore } from 'mobx-react';
import OnboardingStore from './onboarding.store';
import LogoWithShadow from '../atoms/logo';

const Onboarding = observer(() => {
  const store = useLocalStore(OnboardingStore);

  return (
    <Wrapper>
      <LogoWithShadow />
      <OnboardingFields.Authentication
        emailValue={store.email}
        onEmailChange={store.onEmailChange}
        passwordValue={store.password}
        onPasswordChange={store.onPasswordChange}
      />
    </Wrapper>
  );
});

export default Onboarding;
