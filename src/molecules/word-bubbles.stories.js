import React from 'react';
import WordBubbles from './word-bubbles';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/Word Bubbles',
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

export const wordBubbles = () => {
  const selected = [];

  WORDS.forEach((word) => {
    if (boolean(word, false)) {
      selected.push(word);
    }
  });

  return (
    <Component>
      <WordBubbles
        onPress={action('Pressed')}
        selected={selected}
        words={WORDS}
        disabled={boolean('Disabled', false)}
      />
    </Component>
  );
};
