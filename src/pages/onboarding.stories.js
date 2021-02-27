import React from 'react';
import { Page } from '../utils/storybook';
import { COLORS } from '../atoms/palette';
import Onboarding from './onboarding';

export default {
  title: 'Pages/Onboarding',
  component: Onboarding,
};

export const onboarding = () => {
  return (
    <Page
      style={{
        display: 'flex',
        background: COLORS.primary,
        padding: 20,
      }}
    >
      <Onboarding />
    </Page>
  );
};
