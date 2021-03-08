import { action, observable } from 'mobx';

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
    user: null,

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
      console.log(user);
      store.user = user;
    }),
  });

  return store;
};

export default RootStore;
