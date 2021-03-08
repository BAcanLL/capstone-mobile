import { action, observable } from 'mobx';
import { APP_STATE } from '../index.store';

const HomeStore = ({ rootStore, apiStore }) => {
  const store = observable({
    // observables
    settingsVisible: false,

    // actions
    setSettingsVisible: action((visible) => {
      store.settingsVisible = visible;
    }),

    // store methods
    onProfilePress: () => {
      rootStore.setState(APP_STATE.PROFILE);
    },
    onSettingsPress: () => {
      store.setSettingsVisible(true);
    },
    onEditPress: () => {
      console.log('Feature not yet available!');
    },
    onMedicationPress: async () => {
      try {
        await apiStore.submitMedication();
      } catch {
        // handle error
      }
    },
    onCollectDataPress: () => {
      console.log('Feature not yet available!');
    },
  });

  return store;
};

export default HomeStore;
