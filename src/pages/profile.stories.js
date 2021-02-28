import React from 'react';
import { Page } from '../utils/storybook';
import { COLORS } from '../atoms/palette';
import Profile from './profile';

export default {
  title: 'Pages/Profile',
  component: Profile,
};

export const profile = () => {
  return (
    <Page
      style={{
        display: 'flex',
        background: COLORS.lightGrey,
      }}
    >
      <Profile />
    </Page>
  );
};
