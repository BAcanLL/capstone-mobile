import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useLocalStore } from 'mobx-react';
import RootStore from '../index.store';
import { RootStoreContext } from '../index';

// Wrapper for displaying atoms
export const Component = ({ style = {}, className = '', children }) => (
  <View
    className={className}
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      paddingTop: 25,
    }}
  >
    <div style={style}>{children}</div>
  </View>
);

Component.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

// Wrapper for displaying atoms
export const Page = ({ style = {}, className = '', children }) => {
  const mockStore = useLocalStore(RootStore);
  return (
    <RootStoreContext.Provider value={mockStore}>
      <View
        className={className}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginTop: 25,
        }}
      >
        <div style={{ height: 812, width: 375, ...style }}>{children}</div>
      </View>
    </RootStoreContext.Provider>
  );
};
