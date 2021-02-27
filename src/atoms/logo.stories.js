import React from 'react';
import { Component } from '../utils/storybook';
import LogoWithShadow from './logo';
import { COLORS } from './palette';

export default {
  title: 'Atoms/Logo',
  component: LogoWithShadow,
};

export const logo = () => {
  return (
    <Component style={{ background: COLORS.primary, padding: 20 }}>
      <LogoWithShadow />
    </Component>
  );
};
