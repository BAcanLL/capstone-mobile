import React from 'react';
import EmoticonBoard from './emoticon-board';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/Emoticon Board',
  component: EmoticonBoard,
};

export const emoticonBoard = () => (
  <Component>
    <EmoticonBoard
      onPress={action('Pressed')}
      disabled={boolean('Disabled', false)}
    />
  </Component>
);
