import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from './components/icon';
import { ICONS } from './components/icons';
import { COLORS } from './components/palette';

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
