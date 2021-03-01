import { action, observable } from 'mobx';
import { APP_STATE, USER_KEY } from '../index.store';
import { asyncStoreValue } from '../utils/storage';

export const ONBOARDING_STATES = {
  AUTHENTICATION: 'ONBOARDING.AUTHENTICATION',
  REGISTRATION: 'ONBOARDING.REGISTRATION',
  PROFILING: 'ONBOARDING.PROFILING',
  PASSWORD: 'ONBOARDING.PASSWORD',
};

const STATE_ERRORS = {
  NONEXISTANT: 'State does not exist',
  UNMAPPED: 'Unmapped state action',
};

const OnboardingStore = ({ rootStore, apiStore }) => {
  const store = observable({
    // observables
    state: ONBOARDING_STATES.AUTHENTICATION,
    email: '',
    password: '',

    registrationEmail: '',
    registrationPassword: '',
    registrationPasswordConfirm: '',
    TOSAgreement: false,
    TOSVisible: false,
    PPVisible: false,

    firstName: '',
    lastName: '',
    birthday: '',
    height: '',
    weight: '',

    // actions
    setState: action((state) => {
      if (Object.values(ONBOARDING_STATES).includes(state)) {
        store.state = state;
      } else {
        console.error(STATE_ERRORS.NONEXISTANT);
      }
    }),

    onEmailChange: action((email) => {
      store.email = email;
    }),
    onPasswordChange: action((password) => {
      store.password = password;
    }),

    onRegistrationEmailChange: action((email) => {
      store.registrationEmail = email;
    }),
    onRegistrationPasswordChange: action((password) => {
      store.registrationPassword = password;
    }),
    onRegistrationPasswordConfirmChange: action((password) => {
      store.registrationPasswordConfirm = password;
    }),
    toggleTOSAgreement: action(() => {
      store.TOSAgreement = !store.TOSAgreement;
    }),
    setTOSVisible: action((visible) => {
      store.TOSVisible = !!visible;
    }),
    setPPVisible: action((visible) => {
      store.PPVisible = !!visible;
    }),

    onFirstNameChange: action((name) => {
      store.firstName = name;
    }),
    onLastNameChange: action((name) => {
      store.lastName = name;
    }),
    onBirthdayChange: action((birthday) => {
      store.birthday = birthday;
    }),
    onHeightChange: action((height) => {
      store.height = height;
    }),
    onWeightChange: action((weight) => {
      store.weight = weight;
    }),

    // store methods
    onFooterClick: () => {
      switch (store.state) {
        case ONBOARDING_STATES.AUTHENTICATION:
          store.setState(ONBOARDING_STATES.REGISTRATION);
          break;
        case ONBOARDING_STATES.REGISTRATION:
          store.setState(ONBOARDING_STATES.AUTHENTICATION);
          break;
        case ONBOARDING_STATES.PROFILING:
          store.setState(ONBOARDING_STATES.REGISTRATION);
          break;
        default:
          console.error(STATE_ERRORS.UNMAPPED);
      }
    },
    onContinueClick: async () => {
      switch (store.state) {
        case ONBOARDING_STATES.AUTHENTICATION:
          if (store.email === '' || store.password === '') {
            console.log('Missing fields!');
            return;
          }
          try {
            const result = await apiStore.login(store.email, store.password);
            if (result != null) {
              rootStore.setUser(result);
              rootStore.setState(APP_STATE.MAIN);
              await asyncStoreValue(USER_KEY, result);
            }
          } catch {
            // handle error
          }
          break;
        case ONBOARDING_STATES.REGISTRATION:
          if (
            store.registrationEmail === '' ||
            store.registrationPassword === '' ||
            store.registrationPasswordConfirm === ''
          ) {
            console.log('Missing fields!');
            return;
          }
          if (
            store.registrationPassword !== store.registrationPasswordConfirm
          ) {
            console.log('Passwords do not match!');
            return;
          }
          if (!store.TOSAgreement) {
            console.log('Missing TOS agreement!');
            return;
          }
          store.setState(ONBOARDING_STATES.PROFILING);
          break;
        case ONBOARDING_STATES.PROFILING:
          // Check if fields are valid for a new user
          if (
            store.registrationEmail === '' ||
            store.registrationPassword === '' ||
            store.registrationPasswordConfirm === '' ||
            store.firstName === '' ||
            store.lastName === '' ||
            store.birthday === '' ||
            store.height === '' ||
            store.weight === ''
          ) {
            console.log('Missing fields!');
            return;
          }
          if (
            store.registrationPassword !== store.registrationPasswordConfirm
          ) {
            console.log('Passwords do not match!');
            return;
          }

          var user = {
            email: store.registrationEmail,
            password: store.registrationPassword,
            firstName: store.firstName,
            lastName: store.lastName,
            birthday: store.birthday,
            height: store.height,
            weight: store.weight,
          };

          try {
            const result = await apiStore.createUser(user);
            if (result != null) {
              rootStore.setUser(result);
              rootStore.setState(APP_STATE.MAIN);
              await asyncStoreValue(USER_KEY, result);
            }
          } catch {
            // handle error
          }
          rootStore.setState(APP_STATE.MAIN);
          break;
        default:
          console.error(STATE_ERRORS.UNMAPPED);
      }
    },
    onForgotPasswordClick: () => {
      console.log('Feature not yet implemented');
    },
  });

  return store;
};

export default OnboardingStore;
