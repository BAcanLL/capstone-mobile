import { action, observable } from 'mobx';
import { APP_STATE } from '../index.store';

const EXAMPLE_THERAPISTS = [
  {
    id: '1234',
    firstName: 'Gregory',
    lastName: 'House',
    prefix: 'Dr.',
    image:
      'https://njmonthly.com/wp-content/uploads/cache/2008/01/16006860405_de11619ec9_b/111247368.jpg',
    approved: true,
  },
  {
    id: '1235',
    firstName: 'Steven',
    lastName: 'Strange',
    prefix: 'Dr.',
    image:
      'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg',
    approved: false,
  },
  {
    id: '1235',
    firstName: 'Steven',
    lastName: 'Strange',
    prefix: 'Dr.',
    image:
      'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg',
    approved: false,
  },
  {
    id: '1235',
    firstName: 'Steven',
    lastName: 'Strange',
    prefix: 'Dr.',
    image:
      'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg',
    approved: false,
  },
];

const ProfileStore = ({ rootStore }) => {
  const getField = (original, temp) => {
    const data = original || '';
    if (store.editModeEnabled) {
      return typeof temp === 'string' && temp.replace(/\s/g, '').length > 0
        ? temp
        : data;
    } else {
      return data;
    }
  };

  const store = observable({
    // observables
    editModeEnabled: false,

    tempFirstName: '',
    tempLastName: '',
    tempEmail: '',
    tempBirthday: '',
    tempHeight: '',
    tempWeight: '',

    newPassword: '',
    confirmPassword: '',

    code: '',
    therapistList: EXAMPLE_THERAPISTS,

    // computed properties
    get firstName() {
      return getField(
        rootStore.user && rootStore.user.firstName,
        store.tempFirstName
      );
    },
    get lastName() {
      return getField(
        rootStore.user && rootStore.user.lastName,
        store.tempLastName
      );
    },
    get email() {
      return getField(rootStore.user && rootStore.user.email, store.tempEmail);
    },
    get birthday() {
      return getField(
        rootStore.user && rootStore.user.birthday,
        store.tempBirthday
      );
    },
    get height() {
      return getField(
        rootStore.user && rootStore.user.height,
        store.tempHeight
      );
    },
    get weight() {
      return getField(
        rootStore.user && rootStore.user.weight,
        store.tempWeight
      );
    },
    get therapists() {
      return store.therapistList;
    },

    // actions
    setEditModeEnabled: action((enabled) => {
      store.editModeEnabled = enabled;
    }),
    clearFieldData: action(() => {
      store.tempFirstName = '';
      store.tempLastName = '';
      store.tempEmail = '';
      store.tempBirthday = '';
      store.tempHeight = '';
      store.tempWeight = '';
      store.newPassword = '';
      store.confirmPassword = '';
      store.code = '';
    }),

    onFirstNameChange: action((data) => {
      store.tempFirstName = data;
    }),
    onLastNameChange: action((data) => {
      store.tempLastName = data;
    }),
    onEmailChange: action((data) => {
      store.tempEmail = data;
    }),
    onBirthdayChange: action((data) => {
      store.tempBirthday = data;
    }),
    onHeightChange: action((data) => {
      store.tempHeight = data;
    }),
    onWeightChange: action((data) => {
      store.tempWeight = data;
    }),
    onNewPasswordChange: action((data) => {
      store.newPassword = data;
    }),
    onConfirmPasswordChange: action((data) => {
      store.confirmPassword = data;
    }),
    onCodeChange: action((data) => {
      store.code = data;
    }),
    setTherapists: action((therapists) => {
      if (Array.isArray(therapists)) {
        store.therapistList = therapists;
      }
    }),

    // store methods
    onBackButtonPress: () => {
      if (store.editModeEnabled) {
        store.clearFieldData();
        store.setEditModeEnabled(false);
      } else {
        rootStore.setState(APP_STATE.MAIN);
      }
    },
    addTherapist: () => {
      // API call
    },
    deleteTherapist: (t, i) => {
      // API call
      console.log(t, i);
    },
    confirm: () => {
      // API call
      rootStore.setState(APP_STATE.MAIN);
    },
    signOutUser: () => {
      // Delete user token
      rootStore.setState(APP_STATE.ONBOARDING);
    },
    deleteAccount: () => {
      // API call
    },
  });

  return store;
};

export default ProfileStore;
