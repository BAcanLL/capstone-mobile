import { action, observable } from 'mobx';
import { COLORS } from './atoms/palette';

export const APP_STATE = {
  ONBOARDING: 'ONBOARDING',
  MAIN: 'MAIN',
  PROFILE: 'PROFILE',
};

const STATE_ERRORS = {
  NONEXISTANT: 'State does not exist',
  UNMAPPED: 'Unmapped state action',
};

export const USER_KEY = 'USER';

const RootStore = () => {
  const store = observable({
    // observables
    state: APP_STATE.ONBOARDING,
    user: {},
    notifications: null,
    notificationTimer: null,
    notificationOpacity: 1,

    // actions
    setState: action((state) => {
      if (Object.values(APP_STATE).includes(state)) {
        if (process.env.NODE_ENV === 'development') {
          console.log('State transitioning: ', store.state, ' => ', state);
        }
        store.state = state;
      } else {
        console.error(STATE_ERRORS.NONEXISTANT);
      }
    }),
    setUser: action((user) => {
      console.log('Setting user information...');
      store.user = user;
    }),
    clearUser: action(() => {
      console.log('Signing out user...');
      store.user = {};
    }),
    clearNotification: action(() => {
      if (store.notificationTimer != null) {
        store.notifications = null;
      }
    }),
    pushNotification: action((message, color = COLORS.red) => {
      if (typeof message === 'string') {
        store.notifications = { message, color };

        if (store.notificationTimer != null) {
          clearTimeout(store.notificationTimer);
        }
        store.notificationTimer = setTimeout(() => {
          store.clearNotification();
        }, 5000);
      }
    }),
  });

  return store;
};

export default RootStore;
