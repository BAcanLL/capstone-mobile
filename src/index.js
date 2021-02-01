import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from './atoms/icon';
import { ICONS } from './atoms/icons';
import { COLORS } from './atoms/palette';

const AppContainer = () => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Icon icon={ICONS.get('pill')} color={COLORS.green} />
    </View>
  );
};

export default AppContainer;
