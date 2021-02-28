import React from 'react';
import { Component } from '../utils/storybook';
import { AppleWatch } from './device-graphic';

export default {
  title: 'Atoms/Apple Watch',
  component: AppleWatch,
};

export const appleWatch = () => (
  <Component>
    <AppleWatch />
  </Component>
);
