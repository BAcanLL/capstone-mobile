import React from 'react';
import { Component } from '../utils/storybook';
import OnboardingFields from './onboarding-fields';
import { COLORS } from '../atoms/palette';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/Onboarding Fields',
  component: OnboardingFields,
};

export const authentication = () => {
  return (
    <Component
      style={{
        display: 'flex',
        background: COLORS.primary,
        padding: 20,
      }}
    >
      <OnboardingFields.Authentication
        emailValue={text('Email', '')}
        onEmailChange={action('Email Changed')}
        passwordValue={text('Password', '')}
        onPasswordChange={action('Password Changed')}
      />
    </Component>
  );
};

export const registration = () => {
  return (
    <Component
      style={{
        display: 'flex',
        background: COLORS.primary,
        padding: 20,
      }}
    >
      <OnboardingFields.Registration
        emailValue={text('Email', '')}
        onEmailChange={action('Email Changed')}
        passwordValue={text('Password', '')}
        onPasswordChange={action('Password Changed')}
        confirmPasswordValue={text('Confirm Password', '')}
        onConfirmPasswordChange={action('Confirm Password Changed')}
      />
    </Component>
  );
};

export const profiling = () => {
  return (
    <Component
      style={{
        display: 'flex',
        background: COLORS.primary,
        padding: 20,
      }}
    >
      <OnboardingFields.Profiling
        firstNameValue={text('First Name', '')}
        onFirstNameChange={action('First Name Changed')}
        lastNameValue={text('Last Name', '')}
        onLastNameChange={action('Last Name Changed')}
        birthdayValue={text('Birthday', '')}
        onBirthdayChange={action('Birthday Changed')}
        heightValue={text('Height', '')}
        onHeightChange={action('Height Changed')}
        weightValue={text('Weight', '')}
        onWeightChange={action('Weight Changed')}
      />
    </Component>
  );
};
