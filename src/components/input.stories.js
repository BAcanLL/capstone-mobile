import React from 'react';
import Input from './input';
import { Component } from '../utils/storybook';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Input',
  component: Input,
};

export const input = () => {
  return (
    <Component>
      <Input
        value={text('Value', '')}
        onChange={action('Value Changed')}
        onPhotoButtonPress={action('Photo Button Pressed')}
        onMicButtonPress={action('Mic Button Pressed')}
        onSaveButtonPress={action('Save Button Pressed')}
        expanded={boolean('Expanded', false)}
      />
    </Component>
  );
};
