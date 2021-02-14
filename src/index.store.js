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

const RootStore = () => {
  const store = observable({
    // observables
    state: APP_STATE.ONBOARDING,

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
  });

  return store;
};

export default RootStore;
