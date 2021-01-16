import React from 'react';
import { Component } from '../utils/storybook';
import { select } from '@storybook/addon-knobs';
import { colors } from './palette';
import { Icon } from './icon';
import { ICON_KEYS, ICONS } from './icons';
import { View, Text } from 'react-native';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const icons = () => (
  <Component
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: 500,
    }}
  >
    {ICON_KEYS.map((key) => (
      <View
        key={key + 'view'}
        style={{ flexDirection: 'column', alignItems: 'center', margin: 15 }}
      >
        <Icon
          key={key}
          icon={ICONS.get(key)}
          color={select('Color', colors, colors.grey)}
        />
        <Text>{key}</Text>
      </View>
    ))}
  </Component>
);
