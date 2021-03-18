import { action, observable } from 'mobx';
import { APP_STATE, USER_KEY } from '../index.store';
import { asyncStoreObject } from '../utils/storage';
import { COLORS } from '../atoms/palette';

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
    sex: '',
    birthday: '',
    height: '',
    weight: '',

    // actions
    setState: action((state) => {
      if (Object.values(ONBOARDING_STATES).includes(state)) {
        console.log('State transitioning: ', store.state, ' => ', state);
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
    onSexChange: action((sex) => {
      store.sex = sex;
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
            rootStore.pushNotification('Fields cannot be empty!', COLORS.red);
            return;
          }
          try {
            const result = await apiStore.login(store.email, store.password);
            if (result.status === 200) {
              rootStore.setUser(result.data);
              rootStore.setState(APP_STATE.MAIN);
              asyncStoreObject(USER_KEY, result.data);
            }
          } catch {
            // handle error
            rootStore.pushNotification(
              'Error connecting to server.',
              COLORS.red
            );
          }
          break;
        case ONBOARDING_STATES.REGISTRATION:
          if (
            store.registrationEmail === '' ||
            store.registrationPassword === '' ||
            store.registrationPasswordConfirm === ''
          ) {
            console.log('Missing fields!');
            rootStore.pushNotification('Fields cannot be empty!', COLORS.red);
            return;
          }
          if (
            store.registrationPassword !== store.registrationPasswordConfirm
          ) {
            console.log('Passwords do not match!');
            rootStore.pushNotification('Passwords do not match!', COLORS.red);
            return;
          }
          if (!store.TOSAgreement) {
            console.log('Missing TOS agreement!');
            rootStore.pushNotification('Please agree to the TOS!', COLORS.red);
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
            store.sex === '' ||
            store.birthday === '' ||
            store.height === '' ||
            store.weight === ''
          ) {
            console.log('Missing fields!');
            rootStore.pushNotification('Fields cannot be empty!', COLORS.red);
            return;
          }
          if (
            store.registrationPassword !== store.registrationPasswordConfirm
          ) {
            console.log('Passwords do not match!');
            rootStore.pushNotification('Passwords do not match!', COLORS.red);
            return;
          }

          var user = {
            email: store.registrationEmail,
            password: store.registrationPassword,
            firstName: store.firstName,
            lastName: store.lastName,
            sex: store.sex,
            birthday: store.birthday,
            height: store.height,
            weight: store.weight,
          };

          try {
            const result = await apiStore.createUser(user);
            console.log(result.code, result.data);
            if (result.status === 200) {
              rootStore.setUser(result.data);
              rootStore.setState(APP_STATE.MAIN);
              asyncStoreObject(USER_KEY, result.data);
            }
          } catch (e) {
            // handle error
            console.log(e);
            rootStore.pushNotification(
              'Error connecting to server!',
              COLORS.red
            );
          }
          break;
        default:
          console.error(STATE_ERRORS.UNMAPPED);
      }
    },
    onForgotPasswordClick: () => {
      console.log('Feature not yet implemented');
      rootStore.pushNotification(
        'This feature is not yet implemented!',
        COLORS.red
      );
    },
  });

  return store;
};

export default OnboardingStore;
