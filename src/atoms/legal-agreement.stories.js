import React from 'react';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';
import LegalAgreement from './legal-agreement';
import { boolean } from '@storybook/addon-knobs';
import { COLORS } from './palette';

export default {
  title: 'Atoms/Legal Agreement',
  component: LegalAgreement,
};

export const legalAgreement = () => {
  return (
    <Component
      style={{
        display: 'flex',
        background: COLORS.primary,
        padding: 20,
      }}
    >
      <LegalAgreement
        checked={boolean('Checked', false)}
        onPress={action('Clicked')}
        onTOSClick={action('Terms of Service')}
        onPPClick={action('Privacy Policy')}
      />
    </Component>
  );
};
