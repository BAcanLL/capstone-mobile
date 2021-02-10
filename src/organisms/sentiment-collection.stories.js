import React from 'react';
import { Component } from '../utils/storybook';
import SentimentCollection from './sentiment-collection';
import { COLORS } from '../atoms/palette';

export default {
  title: 'Organisms/Sentiment Collection',
  component: SentimentCollection,
};

export const sentimentCollection = () => (
  <Component style={{ background: COLORS.lightGrey, padding: 25, width: 400 }}>
    <SentimentCollection />
  </Component>
);
