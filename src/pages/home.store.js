import { action, observable } from 'mobx';
import { APP_STATE } from '../index.store';
import { COLORS } from '../atoms/palette';

const HomeStore = ({ rootStore, apiStore }) => {
  const store = observable({
    // observables
    settingsVisible: false,
    dataModalVisible: false,

    // actions
    setSettingsVisible: action((visible) => {
      store.settingsVisible = visible;
    }),
    setDataModalVisible: action((visible) => {
      store.dataModalVisible = visible;
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
        rootStore.pushNotification('Sending...', COLORS.lightGreen);
        await apiStore.submitMedication();
        rootStore.pushNotification(
          'Success! Medication data sent',
          COLORS.lightGreen
        );
      } catch {
        // handle error
        rootStore.pushNotification(
          'Error. There was problem sending data.',
          COLORS.red
        );
      }
    },
    onCollectDataPress: () => {
      store.setDataModalVisible(true);
    },
    onSyncPress: async () => {
      try {
        rootStore.pushNotification('Sending...', COLORS.lightGreen);
        await apiStore.submitBiometrics();
        rootStore.pushNotification(
          'Success! Collected data sent',
          COLORS.lightGreen
        );
      } catch {
        // handle error
        rootStore.pushNotification(
          'Error. There was problem sending data.',
          COLORS.red
        );
      }
    },
  });

  return store;
};

export default HomeStore;
