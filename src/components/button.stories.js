import React from 'react';
import Button from './button';
import { Component } from '../utils/storybook';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { colors } from './palette';

export default {
  title: 'Components/Button',
  component: Button,
};

export const button = () => (
  <Component>
    <Button
      text={text('Text', 'Press Me')}
      onPress={action('Pressed')}
      color={select('Color', colors, colors.Primary)}
      textColor={select('Text Color', colors, colors.white)}
    />
  </Component>
);

export const buttonWithIcon = () => (
  <Component>
    <Button
      text={text('Text', 'Press Me')}
      onPress={action('Pressed')}
      color={select('Color', colors, colors.Primary)}
      textColor={select('Text Color', colors, colors.white)}
      icon={'pill'}
    />
  </Component>
);
