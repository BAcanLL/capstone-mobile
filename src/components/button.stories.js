import React from 'react';
import Button, { BUTTON_SIZES } from './button';
import { Component } from '../utils/storybook';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { COLORS } from './palette';

export default {
  title: 'Components/Button',
  component: Button,
};

export const buttonWithText = () => (
  <Component>
    <Button
      text={text('Text', 'Press Me')}
      onPress={action('Pressed')}
      color={select('Color', COLORS, COLORS.primary)}
      textColor={select('Text Color', COLORS, COLORS.white)}
      size={select('Size', BUTTON_SIZES, BUTTON_SIZES.regular)}
    />
  </Component>
);

export const buttonWithIcon = () => (
  <Component>
    <Button
      onPress={action('Pressed')}
      color={select('Color', COLORS, COLORS.primary)}
      icon={'microphone'}
      size={select('Size', BUTTON_SIZES, BUTTON_SIZES.regular)}
    />
  </Component>
);

export const buttonWithTextAndIcon = () => (
  <Component>
    <Button
      text={text('Text', 'Take')}
      onPress={action('Pressed')}
      color={select('Color', COLORS, COLORS.primary)}
      textColor={select('Text Color', COLORS, COLORS.white)}
      icon={'pill'}
      size={select('Size', BUTTON_SIZES, BUTTON_SIZES.regular)}
    />
  </Component>
);
