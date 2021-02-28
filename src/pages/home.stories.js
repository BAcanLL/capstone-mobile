import React from 'react';
import { Page } from '../utils/storybook';
import { COLORS } from '../atoms/palette';
import Home from './home';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const home = () => {
  return (
    <Page
      style={{
        display: 'flex',
        background: COLORS.lightGrey,
      }}
    >
      <Home />
    </Page>
  );
};
