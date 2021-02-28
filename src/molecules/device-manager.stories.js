import React from 'react';
import { Component } from '../utils/storybook';
import DeviceManager from './device-manager';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/Device Manager',
  component: DeviceManager,
};

export const deviceManager = () => {
  return (
    <Component style={{ width: 375 }}>
      <DeviceManager
        onProfilePress={action('Profile')}
        onSettingsPress={action('Settings')}
        onEditPress={action('Edit')}
      />
    </Component>
  );
};
