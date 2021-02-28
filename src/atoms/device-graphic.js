import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { COLORS } from './palette';

export const AppleWatch = () => (
  <Svg width="140" height="230" viewBox="0 0 140 230" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.1038 55.5626H33.0189C21.6215 55.5626 12.3821 64.7897 12.3821 76.1719V153.828C12.3821 165.21 21.6215 174.437 33.0189 174.437H94.1038C105.501 174.437 114.741 165.21 114.741 153.828V76.1719C114.741 64.7897 105.501 55.5626 94.1038 55.5626ZM33.0189 43.197C14.7831 43.197 0 57.9604 0 76.1719V153.828C0 172.039 14.783 186.803 33.0189 186.803H94.1038C112.34 186.803 127.123 172.039 127.123 153.828V76.1719C127.123 57.9604 112.34 43.197 94.1038 43.197H33.0189Z"
      fill={COLORS.highlight}
    />
    <Path
      d="M36.9812 0L25.9199 36.767H96.5803L85.519 0H36.9812Z"
      fill={COLORS.highlight}
    />
    <Path
      d="M36.9812 230L25.9199 193.233H96.5803L85.519 230H36.9812Z"
      fill={COLORS.highlight}
    />
    <Rect
      x="130.59"
      y="73.8638"
      width="9.41037"
      height="27.2043"
      rx="4.70518"
      fill={COLORS.highlight}
    />
  </Svg>
);
