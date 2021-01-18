import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Wrapper for displaying components
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
