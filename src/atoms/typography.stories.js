import React from 'react';
import { Component } from '../utils/storybook';
import { boolean, select } from '@storybook/addon-knobs';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from './typography';
import { COLORS } from './palette';

export default {
  title: 'Atoms/Typography',
  component: TextView,
};

export const typography = () => (
  <Component>
    <TextView
      color={select('Color', COLORS, COLORS.darkGrey)}
      weight={select('Font Weight', FONT_WEIGHTS, FONT_WEIGHTS.regular)}
      size={select('Font Size', FONT_SIZES, FONT_SIZES.regular)}
      italic={boolean('Italic', false)}
    >
      Typography
    </TextView>
  </Component>
);
