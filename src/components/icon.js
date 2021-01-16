import React from 'react';
import { colors } from './palette';
import PropTypes from 'prop-types';
import { ICON_KEYS } from './icons';
import Svg, { G } from 'react-native-svg';

export const DEFAULT_ICON_SIZE = 18;

export const Icon = ({
  color = colors.white,
  icon,
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  style = {},
}) => {
  return icon ? (
    <Svg style={style} width={width} height={height} viewBox="0 0 41 40">
      <G fill={color}>{icon}</G>
    </Svg>
  ) : null;
};

Icon.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  icon: PropTypes.oneOf(ICON_KEYS).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
