import React from 'react';
import { Component } from '../utils/storybook';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Field from './field';
import { COLORS } from './palette';

export default {
  title: 'Atoms/Field',
  component: Field,
};

export const field = () => {
  return (
    <Component style={{ display: 'flex', width: 200 }}>
      <Field
        value={text('value', '')}
        onChange={action('Value Changed')}
        placeholder={text('Placeholder Text', 'Type something...')}
        placeholderTextColor={select(
          'Placeholder Text Color',
          COLORS,
          COLORS.lightGrey
        )}
        color={select('Border Color', COLORS, COLORS.lightGrey)}
        textColor={select('Text Color', COLORS, COLORS.darkGrey)}
        secure={boolean('Secure', false)}
      />
    </Component>
  );
};
