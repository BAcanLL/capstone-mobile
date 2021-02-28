import React from 'react';
import { Component } from '../utils/storybook';
import { action } from '@storybook/addon-actions';
import Associate from './associate';

export default {
  title: 'Atoms/Associate',
  component: Associate,
};

const EXAMPLE = {
  id: '1234',
  firstName: 'Gregory',
  lastName: 'House',
  prefix: 'Dr.',
  image:
    'https://njmonthly.com/wp-content/uploads/cache/2008/01/16006860405_de11619ec9_b/111247368.jpg',
  approved: true,
};

const EXAMPLE2 = {
  id: '1235',
  firstName: 'Steven',
  lastName: 'Strange',
  prefix: 'Dr.',
  image:
    'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg',
  approved: false,
};

export const associate = () => (
  <Component>
    <Associate {...EXAMPLE} />
  </Component>
);

export const edit = () => (
  <>
    <Component style={{ width: 300 }}>
      <Associate.Edit {...EXAMPLE} onDeletePress={action('Delete')} />
    </Component>
    <Component style={{ width: 300 }}>
      <Associate.Edit {...EXAMPLE2} onDeletePress={action('Delete')} />
    </Component>
  </>
);
