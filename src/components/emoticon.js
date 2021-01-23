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

const DismalSvg = ({ pressed = false }) => (
  <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <Mask
      id="mask0"
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
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_linear)" />
    </Mask>
    <G mask="url(#mask0)">
      <Circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
      />
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint1_linear)" />
      <Circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint2_linear)" />
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
          id="paint0_linear"
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
          id="paint1_linear"
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
          id="paint2_linear"
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

const EcstaticSvg = ({ pressed = false }) => (
  <Svg width="56" height="55" viewBox="0 0 56 55" fill="none">
    <Circle
      cx="28.2002"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="28.2002" cy="27.5" r="27.5" fill="url(#paint0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1157 15.1181C14.5895 13.1469 12.7931 11.6952 10.658 11.6952C8.52288 11.6952 6.72649 13.1469 6.2003 15.1181C6.2003 15.1181 6.3197 15.6355 6.91372 15.6355C7.50774 15.6355 7.62714 15.1181 7.62714 15.1181C8.10343 13.909 9.2809 13.0535 10.658 13.0535C12.0351 13.0535 13.2126 13.909 13.6889 15.1181C13.6889 15.1181 13.7625 15.6355 14.4023 15.6355C15.0421 15.6355 15.1157 15.1181 15.1157 15.1181Z"
      fill="#5F5F5F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51 15.1182C50.4738 13.147 48.6774 11.6953 46.5423 11.6953C44.4071 11.6953 42.6108 13.147 42.0846 15.1182C42.0846 15.1182 42.204 15.6356 42.798 15.6356C43.392 15.6356 43.5114 15.1182 43.5114 15.1182C43.9877 13.9091 45.1652 13.0536 46.5423 13.0536C47.9194 13.0536 49.0969 13.9091 49.5732 15.1182C49.5732 15.1182 49.6468 15.6356 50.2866 15.6356C50.9264 15.6356 51 15.1182 51 15.1182Z"
      fill="#5F5F5F"
    />
    <Ellipse cx="4.04029" cy="19.2961" rx="3.3401" ry="1.9484" fill="#FF8989" />
    <Ellipse cx="52.3601" cy="19.2961" rx="3.3401" ry="1.9484" fill="#FF8989" />
    <Mask
      id="mask0"
      maskType="alpha"
      maskUnits="userSpaceOnUse"
      x="8"
      y="20"
      width="41"
      height="24"
    >
      <Path
        d="M8.30038 23.4369C8.30032 23.4565 8.30029 23.4761 8.30029 23.4957C8.30029 34.7094 17.3889 43.7999 28.6003 43.7999C39.8117 43.7999 48.9003 34.7094 48.9003 23.4957C48.9003 23.4761 48.9003 23.4565 48.9002 23.4369C48.9002 23.4369 42.1925 20.2 28.6003 20.2C15.0081 20.2 8.30038 23.4369 8.30038 23.4369Z"
        fill="#FFFFFF"
      />
    </Mask>
    <G mask="url(#mask0)">
      <rect x="7.2002" y="18.6" width="42.7" height="27.6" fill="#5F5F5F" />
      <circle cx="28.6505" cy="47.65" r="19.15" fill="#FF8989" />
    </G>
    {!pressed && (
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0.700195"
          y1="0"
          x2="55.7002"
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
  <Svg width="56" height="55" viewBox="0 0 56 55" fill="none">
    <Circle
      cx="27.8999"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="27.8999" cy="27.5" r="27.5" fill="url(#paint0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.3799 30.3C23.0314 32.7763 25.2558 34.6 27.8996 34.6C30.5434 34.6 32.7677 32.7763 33.4193 30.3C33.4193 30.3 33.2714 29.65 32.5359 29.65C31.8004 29.65 31.6525 30.3 31.6525 30.3C31.0628 31.8189 29.6048 32.8937 27.8996 32.8937C26.1944 32.8937 24.7364 31.8189 24.1467 30.3C24.1467 30.3 24.0555 29.65 23.2633 29.65C22.471 29.65 22.3799 30.3 22.3799 30.3Z"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 13.6078 22.6)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 43.3748 22.6)"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0.399902"
          y1="0"
          x2="55.3999"
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
  <Svg width="56" height="55" viewBox="0 0 56 55" fill="none">
    <Circle
      cx="28.1001"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="28.1001" cy="27.5" r="27.5" fill="url(#paint0_linear)" />
    <Ellipse
      rx="2.66129"
      ry="2.7"
      transform="matrix(-1 0 0 1 18.7362 26.3)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="2.7"
      transform="matrix(-1 0 0 1 37.4637 26.3)"
      fill="#5F5F5F"
    />
    <Path
      d="M23.7005 34.6H32.5985C32.5985 34.6 33.1271 34.6 33.1271 35.45C33.1271 36.3 32.5985 36.3 32.5985 36.3H23.7005C23.7005 36.3 23.1719 36.3 23.1719 35.45C23.1719 34.6 23.7005 34.6 23.7005 34.6Z"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0.600098"
          y1="0"
          x2="55.6001"
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
  <Svg width="56" height="55" viewBox="0 0 56 55" fill="none">
    <Circle
      cx="28.3"
      cy="27.5"
      r="27.5"
      fill={pressed ? EMOTE_PRESSED_COLOR : EMOTE_COLOR}
    />
    <Circle cx="28.3" cy="27.5" r="27.5" fill="url(#paint0_linear)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.7803 42.3501C23.4318 39.8739 25.6562 38.0501 28.3 38.0501C30.9438 38.0501 33.1681 39.8739 33.8197 42.3501C33.8197 42.3501 33.6718 43.0001 32.9363 43.0001C32.2008 43.0001 32.0529 42.3501 32.0529 42.3501C31.4632 40.8312 30.0052 39.7565 28.3 39.7565C26.5948 39.7565 25.1368 40.8312 24.547 42.3501C24.547 42.3501 24.4559 43.0001 23.6637 43.0001C22.8714 43.0001 22.7803 42.3501 22.7803 42.3501Z"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 14.0079 31)"
      fill="#5F5F5F"
    />
    <Ellipse
      rx="2.66129"
      ry="3.5"
      transform="matrix(-1 0 0 1 43.775 31)"
      fill="#5F5F5F"
    />
    {!pressed && (
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0.800049"
          y1="0"
          x2="55.8"
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

const EmoticonWrapper = ({ onPress, children }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
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

const Dismal = ({ onPress }) => (
  <EmoticonWrapper onPress={onPress}>
    <DismalSvg />
  </EmoticonWrapper>
);

const Sad = ({ onPress }) => (
  <EmoticonWrapper onPress={onPress}>
    <SadSvg />
  </EmoticonWrapper>
);

const Neutral = ({ onPress }) => (
  <EmoticonWrapper onPress={onPress}>
    <NeutralSvg />
  </EmoticonWrapper>
);

const Happy = ({ onPress }) => (
  <EmoticonWrapper onPress={onPress}>
    <HappySvg />
  </EmoticonWrapper>
);

const Ecstatic = ({ onPress }) => (
  <EmoticonWrapper onPress={onPress}>
    <EcstaticSvg />
  </EmoticonWrapper>
);

const pt = {
  onPress: PropTypes.func,
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
