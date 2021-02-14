import { action, observable } from 'mobx';
import { APP_STATE } from '../index.store';

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

const OnboardingStore = ({ rootStore }) => {
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
    onContinueClick: () => {
      switch (store.state) {
        case ONBOARDING_STATES.AUTHENTICATION:
          rootStore.setState(APP_STATE.MAIN);
          break;
        case ONBOARDING_STATES.REGISTRATION:
          if (store.TOSAgreement) {
            store.setState(ONBOARDING_STATES.PROFILING);
          } else {
            // notification
          }
          break;
        case ONBOARDING_STATES.PROFILING:
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
