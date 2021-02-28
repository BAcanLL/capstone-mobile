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

const EXAMPLE_USER = {
  id: '1234',
  token: 'abcdefg',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  birthday: '2019-09-07T-15:50+00',
  height: '170',
  weight: '90.2',
};

const RootStore = () => {
  const store = observable({
    // observables
    state: APP_STATE.ONBOARDING,
    user: EXAMPLE_USER,

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
