import { action, observable } from 'mobx';
import { APP_STATE } from '../index.store';

const HomeStore = ({ rootStore }) => {
  const store = observable({
    // observables
    settingsVisible: false,

    // actions
    setSettingsVisible: action((visible) => {
      store.setSettingsVisible = visible;
    }),

    // store methods
    onProfilePress: () => {
      rootStore.setState(APP_STATE.PROFILE);
    },
    onSettingsPress: () => {
      store.setSettingsVisible(true);
    },
    onEditPress: () => {
      console.log('Edit');
    },
    onMedicationPress: () => {
      console.log('Take');
    },
    onCollectDataPress: () => {
      console.log('Collect Data');
    },
  });

  return store;
};

export default HomeStore;
