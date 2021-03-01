import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useCustomFonts } from './utils/hooks';
import { COLORS } from './atoms/palette';
import { observer, useLocalStore } from 'mobx-react';
import RootStore, { APP_STATE, USER_KEY } from './index.store';
import Onboarding from './pages/onboarding';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Home from './pages/home';
import Profile from './pages/profile';
import { asyncGetValue } from './utils/storage';
import APIStore from './api.store';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export const RootStoreContext = React.createContext(null);

const AppContainer = observer(() => {
  const store = useLocalStore(RootStore);
  const apiStore = useLocalStore(APIStore, { rootStore: store });
  const [fontsLoaded] = useCustomFonts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      // Check if we can load a user from storage
      if (store.user == null) {
        try {
          setLoading(true);
          const cachedUser = await asyncGetValue(USER_KEY);
          if (cachedUser != null) {
            store.setUser(cachedUser);
            store.setState(APP_STATE.MAIN);
          }
          setLoading(false);
        } catch {
          console.log('Failed to load user!');
          setLoading(false);
        }
      }
    };
    getUser();
  }, []);

  return (
    <RootStoreContext.Provider value={{ rootStore: store, apiStore }}>
      <DismissKeyboard>
        <View style={styles.container}>
          {fontsLoaded && !loading ? (
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
