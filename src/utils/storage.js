import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoreValue = async (k, t) => {
  if (typeof k !== 'string') {
    console.log('Storage key must be a string!');
    return;
  }
  try {
    await AsyncStorage.setItem(k, t);
  } catch (e) {
    console.log('Failed to store value! ' + e);
  }
};

export const asyncGetValue = async (k) => {
  if (typeof k !== 'string') {
    console.log('Storage key must be a string!');
    return;
  }
  try {
    return await AsyncStorage.getItem(k);
  } catch (e) {
    console.log('Failed to retrieve value! ' + e);
  }
};

export const asyncRemoveValue = async (k) => {
  if (typeof k !== 'string') {
    console.log('Storage key must be a string!');
    return;
  }
  try {
    return await AsyncStorage.removeItem(k);
  } catch (e) {
    console.log('Failed to remove value! ' + e);
  }
};
