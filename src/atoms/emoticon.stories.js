import React from 'react';
import Emoticon from './emoticon';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/Emoticon',
  component: Emoticon,
};

export const dismal = () => (
  <Component>
    <Emoticon.Dismal onPress={action('Pressed')} />
  </Component>
);

export const sad = () => (
  <Component>
    <Emoticon.Sad onPress={action('Pressed')} />
  </Component>
);

export const neutral = () => (
  <Component>
    <Emoticon.Neutral onPress={action('Pressed')} />
  </Component>
);

export const happy = () => (
  <Component>
    <Emoticon.Happy onPress={action('Pressed')} />
  </Component>
);

export const ecstatic = () => (
  <Component>
    <Emoticon.Ecstatic onPress={action('Pressed')} />
  </Component>
);
