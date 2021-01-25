import React from 'react';
import WordBubbles from './word-bubbles';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components/Word Bubbles',
  component: WordBubbles,
};

const WORDS = [
  'Bored',
  'Angry',
  'Confident',
  'Accomplished',
  'Guilty',
  'Relieved',
  'Happy',
  'Exhausted',
  'Lonely',
];

export const wordBubbles = () => (
  <Component>
    <WordBubbles
      onPress={action('Pressed')}
      words={WORDS}
      disabled={boolean('Disabled', false)}
    />
  </Component>
);
