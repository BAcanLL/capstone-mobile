import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useCustomFonts } from './utils/hooks';
import { COLORS } from './atoms/palette';
import { observer, useLocalStore } from 'mobx-react';
import RootStore, { APP_STATE } from './index.store';
import Onboarding from './pages/onboarding';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Home from './pages/home';
import Profile from './pages/profile';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export const RootStoreContext = React.createContext(null);

const AppContainer = observer(() => {
  const store = useLocalStore(RootStore);
  const [fontsLoaded] = useCustomFonts();

  return (
    <RootStoreContext.Provider value={store}>
      <DismissKeyboard>
        <View style={styles.container}>
          {fontsLoaded ? (
            <>
              {store.state === APP_STATE.ONBOARDING && <Onboarding />}
              {store.state === APP_STATE.MAIN && <Home />}
              {store.state === APP_STATE.PROFILE && <Profile />}
            </>
          ) : null}
        </View>
      </DismissKeyboard>
    </RootStoreContext.Provider>
  );
});

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
