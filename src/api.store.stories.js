import React from 'react';
import { useLocalStore } from 'mobx-react';
import RootStore from './index.store';
import APIStore from './api.store';

export default {
  title: 'API/Default',
};

export const Default = () => {
  const store = useLocalStore(RootStore);
  useLocalStore(APIStore, { rootStore: store });
  return <div />;
};
