import React from 'react';
import { StyleSheet, View } from 'react-native';
import SentimentCollection from './organisms/sentiment-collection';
import { useCustomFonts } from './utils/hooks';
import { COLORS } from './atoms/palette';
const AppContainer = () => {
  const [fontsLoaded] = useCustomFonts();
  return (
    <View style={styles.container}>
      {fontsLoaded ? <SentimentCollection /> : null}
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
