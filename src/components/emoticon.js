import React, { useState } from 'react';
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';
import { Pressable } from 'react-native';
import { ShadowWrapper } from './emoticon.style';
import PropTypes from 'prop-types';

const EMOTE_COLOR = '#FFDD65';
const EMOTE_PRESSED_COLOR = '#FFDB80';

const EcstaticSvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Circle
      cx="27.5"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#ecstatic0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4155 15.1181C13.8893 13.1469 12.0929 11.6952 9.95782 11.6952C7.82268 11.6952 6.0263 13.1469 5.5001 15.1181C5.5001 15.1181 5.61951 15.6355 6.21352 15.6355C6.80754 15.6355 6.92694 15.1181 6.92694 15.1181C7.40323 13.909 8.58071 13.0535 9.95782 13.0535C11.3349 13.0535 12.5124 13.909 12.9887 15.1181C12.9887 15.1181 13.0623 15.6355 13.7021 15.6355C14.3419 15.6355 14.4155 15.1181 14.4155 15.1181Z"
      fill="#5F5F5F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.2998 15.1182C49.7736 13.147 47.9772 11.6953 45.8421 11.6953C43.7069 11.6953 41.9106 13.147 41.3844 15.1182C41.3844 15.1182 41.5038 15.6356 42.0978 15.6356C42.6918 15.6356 42.8112 15.1182 42.8112 15.1182C43.2875 13.9091 44.465 13.0536 45.8421 13.0536C47.2192 13.0536 48.3967 13.9091 48.873 15.1182C48.873 15.1182 48.9466 15.6356 49.5864 15.6356C50.2262 15.6356 50.2998 15.1182 50.2998 15.1182Z"
      fill="#5F5F5F"
    />
    <Ellipse cx="3.3401" cy="19.2961" rx="3.3401" ry="1.9484" fill="#FF8989" />
    <Ellipse cx="51.6599" cy="19.2961" rx="3.3401" ry="1.9484" fill="#FF8989" />
    <Mask
      id="ecstatic_mask"
      maskType="alpha"
      maskUnits="userSpaceOnUse"
      x="7"
      y="20"
      width="42"
      height="24"
    >
      <Path
        d="M7.60018 23.4369C7.60013 23.4565 7.6001 23.4761 7.6001 23.4957C7.6001 34.7094 16.6887 43.7999 27.9001 43.7999C39.1115 43.7999 48.2001 34.7094 48.2001 23.4957C48.2001 23.4761 48.2001 23.4565 48.2 23.4369C48.2 23.4369 41.4923 20.2 27.9001 20.2C14.3079 20.2 7.60018 23.4369 7.60018 23.4369Z"
        fill="#FFFFFF"
      />
    </Mask>
    <G mask="url(#ecstatic_mask)">
      <Rect x="6.5" y="18.6" width="42.7" height="27.6" fill="#5F5F5F" />
      <Circle cx="27.9503" cy="47.65" r="19.15" fill="#FF8989" />
    </G>
    {!pressed && (
      <Defs>
        <LinearGradient
          id="ecstatic0_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

const HappySvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Circle
      cx="27.5"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#happy0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.98 30.3C22.6315 32.7763 24.8559 34.6 27.4997 34.6C30.1435 34.6 32.3678 32.7763 33.0194 30.3C33.0194 30.3 32.8715 29.65 32.136 29.65C31.4005 29.65 31.2526 30.3 31.2526 30.3C30.6629 31.8189 29.2049 32.8937 27.4997 32.8937C25.7945 32.8937 24.3365 31.8189 23.7467 30.3C23.7467 30.3 23.6556 29.65 22.8634 29.65C22.0711 29.65 21.98 30.3 21.98 30.3Z"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 13.2079 22.6)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 42.9749 22.6)"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="happy0_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

const NeutralSvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Circle
      cx="27.5"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#neutral0_linear)" />
    <Ellipse
      rx="2.66129"
      ry="2.7"
      transform="matrix(-1 0 0 1 18.1361 26.3)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="2.7"
      transform="matrix(-1 0 0 1 36.8636 26.3)"
      fill="#5F5F5F"
    />
    <Path
      d="M23.1004 34.6H31.9984C31.9984 34.6 32.527 34.6 32.527 35.45C32.527 36.3 31.9984 36.3 31.9984 36.3H23.1004C23.1004 36.3 22.5718 36.3 22.5718 35.45C22.5718 34.6 23.1004 34.6 23.1004 34.6Z"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="neutral0_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

const SadSvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Circle
      cx="27.5"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#sad0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9802 42.3501C22.6318 39.8739 24.8561 38.0501 27.4999 38.0501C30.1437 38.0501 32.3681 39.8739 33.0196 42.3501C33.0196 42.3501 32.8718 43.0001 32.1363 43.0001C31.4007 43.0001 31.2529 42.3501 31.2529 42.3501C30.6631 40.8312 29.2051 39.7565 27.4999 39.7565C25.7947 39.7565 24.3367 40.8312 23.747 42.3501C23.747 42.3501 23.6558 43.0001 22.8636 43.0001C22.0714 43.0001 21.9802 42.3501 21.9802 42.3501Z"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 13.2079 31)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 42.9749 31)"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="sad0_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

const DismalSvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Mask
      id="mask_dismal"
      maskType="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="55"
      height="55"
    >
      <Circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
      />
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#dismal0_linear)" />
    </Mask>
    <G mask="url(#mask_dismal)">
      <Circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
      />
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#dismal1_linear)" />
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#dismal2_linear)" />
      <Rect
        x="10.9453"
        y="38"
        width="5.61829"
        height="20.4999"
        fill="#54CCFF"
      />
      <Rect
        x="9.4624"
        y="37.5"
        width="8.67383"
        height="1.7"
        rx="0.849998"
        fill="#5F5F5F"
      />
      <Rect x="38.5366" y="38.6" width="5.61831" height="20.5" fill="#54CCFF" />
      <Rect
        x="36.9624"
        y="37.5"
        width="8.67384"
        height="1.7"
        rx="0.849998"
        fill="#5F5F5F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9802 47.3002C22.6318 44.8239 24.8561 43.0002 27.4999 43.0002C30.1437 43.0002 32.3681 44.8239 33.0196 47.3002C33.0196 47.3002 32.8718 47.9502 32.1363 47.9502C31.4007 47.9502 31.2529 47.3002 31.2529 47.3002C30.6631 45.7813 29.2051 44.7065 27.4999 44.7065C25.7947 44.7065 24.3367 45.7813 23.747 47.3002C23.747 47.3002 23.6558 47.9502 22.8636 47.9502C22.0714 47.9502 21.9802 47.3002 21.9802 47.3002Z"
        fill="#5F5F5F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.466 26.0621C12.8515 28.6304 8.89728 29.6687 7.2419 29.8765L7.09668 28.6856C8.62828 28.4933 12.29 27.5117 14.6432 25.2L15.466 26.0621Z"
        fill="#5F5F5F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.6234 26.0621C42.2379 28.6304 46.1921 29.6687 47.8475 29.8765L47.9927 28.6856C46.4611 28.4933 42.7994 27.5117 40.4461 25.2L39.6234 26.0621Z"
        fill="#5F5F5F"
      />
    </G>
    {!pressed && (
      <Defs>
        <LinearGradient
          id="dismal0_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          id="dismal1_linear"
          x1="0"
          y1="0"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFA2" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          id="dismal2_linear"
          x1="27.5"
          y1="0"
          x2="27.5"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7694FF" stopOpacity="0.53" />
          <Stop offset="0.822917" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

const EmoticonWrapper = ({ onPress, disabled, children }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ShadowWrapper
        pressed={pressed}
        style={
          !pressed && {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.05,
          }
        }
      >
        {React.cloneElement(children, { pressed })}
      </ShadowWrapper>
    </Pressable>
  );
};

const Dismal = ({ onPress, disabled = false }) => (
  <EmoticonWrapper onPress={onPress} disabled={disabled}>
    <DismalSvg />
  </EmoticonWrapper>
);

const Sad = ({ onPress, disabled = false }) => (
  <EmoticonWrapper onPress={onPress} disabled={disabled}>
    <SadSvg />
  </EmoticonWrapper>
);

const Neutral = ({ onPress, disabled = false }) => (
  <EmoticonWrapper onPress={onPress} disabled={disabled}>
    <NeutralSvg />
  </EmoticonWrapper>
);

const Happy = ({ onPress, disabled = false }) => (
  <EmoticonWrapper onPress={onPress} disabled={disabled}>
    <HappySvg />
  </EmoticonWrapper>
);

const Ecstatic = ({ onPress, disabled = false }) => (
  <EmoticonWrapper onPress={onPress} disabled={disabled}>
    <EcstaticSvg />
  </EmoticonWrapper>
);

const pt = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Dismal.propTypes = pt;
Sad.propTypes = pt;
Neutral.propTypes = pt;
Happy.propTypes = pt;
Ecstatic.propTypes = pt;

const Emoticon = {
  Dismal,
  Sad,
  Neutral,
  Happy,
  Ecstatic,
};

export default Emoticon;
