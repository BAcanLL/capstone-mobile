import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoreValue = async (k, t) => {
  if (typeof k !== 'string' || typeof t !== 'string') {
    console.log('Storage key and value must be a string!');
    return;
  }
  if (t == null) {
    console.log('Cannot store null value!');
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

export const asyncStoreObject = async (k, t) => {
  const s = JSON.stringify(t);
  return await asyncStoreValue(k, s);
};

export const asyncGetObject = async (k) => {
  const r = await asyncGetValue(k);
  return JSON.parse(r);
};

export const asyncRemoveObject = async (k) => {
  return await asyncRemoveValue(k);
};
