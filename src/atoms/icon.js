import React from 'react';
import { COLORS } from './palette';
import PropTypes from 'prop-types';
import { ICON_KEYS, ICONS } from './icons';
import Svg, { G } from 'react-native-svg';

export const DEFAULT_ICON_SIZE = 18;

export const Icon = ({
  color = COLORS.white,
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
  color: PropTypes.oneOf(Object.values(COLORS)),
  icon: PropTypes.oneOf([...ICON_KEYS, ...ICONS.values()]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
