import React from 'react';
import { Component } from '../utils/storybook';
import ProfileInfo from './profile-info';
import { COLORS } from '../atoms/palette';

export default {
  title: 'Molecules/Profile Info',
  component: ProfileInfo,
};

const EXAMPLE_USER = {
  id: '1234',
  token: 'abcdefg',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  birthday: '2019-09-07T15:50+00',
  height: '170',
  weight: '90.2',
};

const THERAPISTS = [
  {
    id: '1234',
    firstName: 'Gregory',
    lastName: 'House',
    prefix: 'Dr.',
    image:
      'https://njmonthly.com/wp-content/uploads/cache/2008/01/16006860405_de11619ec9_b/111247368.jpg',
    approved: true,
  },
  {
    id: '1235',
    firstName: 'Steven',
    lastName: 'Strange',
    prefix: 'Dr.',
    image:
      'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg',
    approved: false,
  },
];

export const profileInfo = () => {
  return (
    <Component
      style={{ background: COLORS.lightGrey, padding: 25, width: 400 }}
    >
      <ProfileInfo {...EXAMPLE_USER} therapists={THERAPISTS} />
    </Component>
  );
};

export const edit = () => {
  return (
    <Component
      style={{
        background: COLORS.lightGrey,
        padding: 25,
        width: 400,
        height: 800,
      }}
    >
      <ProfileInfo.Edit {...EXAMPLE_USER} therapists={THERAPISTS} />
    </Component>
  );
};
