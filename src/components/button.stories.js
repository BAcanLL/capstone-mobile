import React from 'react';
import Button from './button';
import { Component } from '../utils/storybook';

export default {
  title: 'Components/Button',
  component: Button,
};

export const defaultView = () => (
  <Component>
    <Button />
  </Component>
);
