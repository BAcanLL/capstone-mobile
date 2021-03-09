import React, { useEffect, useRef } from 'react';
import {
  Bottom,
  Graphic,
  TextWrapper,
  Top,
  Wrapper,
} from './device-manager.style';
import { AppleWatch } from '../atoms/device-graphic';
import { Animated, Easing } from 'react-native';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';
import Button, { BUTTON_SIZES } from '../atoms/button';
import PropTypes from 'prop-types';

const INITIAL_POSITION = -40;
const FINAL_POSITION = 10;

const PAIRED_DEVICE = 'Paired Device';
const PLACEHOLDER_NAME = 'John';
const S_WATCH = "'s Watch";
const PLACEHOLDER_MODEL = 'Apple Watch Series 6';

const EDIT_BUTTON_TEXT = 'Edit';

const DeviceManager = ({
  name = PLACEHOLDER_NAME,
  onProfilePress,
  onSettingsPress,
  onEditPress,
}) => {
  const positionAnim = useRef(new Animated.Value(INITIAL_POSITION)).current;
  const alphaAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(positionAnim, {
      toValue: FINAL_POSITION,
      duration: 700,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
    Animated.timing(alphaAnim, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Wrapper>
      <Graphic>
        <Animated.View
          style={{
            transform: [{ translateY: positionAnim }],
            opacity: alphaAnim,
          }}
        >
          <AppleWatch />
        </Animated.View>
      </Graphic>
      <Top>
        <Button
          onPress={onProfilePress}
          icon="profile"
          size={BUTTON_SIZES.title}
          disablePressStyle
        />
        <Button
          onPress={onSettingsPress}
          icon="gear"
          size={BUTTON_SIZES.title}
          disablePressStyle
        />
      </Top>
      <Bottom>
        <TextWrapper>
          <TextView
            color={COLORS.white}
            size={FONT_SIZES.large}
            weight={FONT_WEIGHTS.medium}
          >
            {PAIRED_DEVICE}
          </TextView>
          <TextView
            color={COLORS.white}
            size={FONT_SIZES.title}
            weight={FONT_WEIGHTS.bold}
          >
            {name + S_WATCH}
          </TextView>
          <TextView
            color={COLORS.white}
            size={FONT_SIZES.small}
            weight={FONT_WEIGHTS.regular}
          >
            {PLACEHOLDER_MODEL}
          </TextView>
        </TextWrapper>
        <Button
          onPress={onEditPress}
          text={EDIT_BUTTON_TEXT}
          color={COLORS.white}
          textColor={COLORS.primary}
          size={{ ...BUTTON_SIZES.large, shadow: false }}
        />
      </Bottom>
    </Wrapper>
  );
};

export default DeviceManager;

DeviceManager.propTypes = {
  onProfilePress: PropTypes.func.isRequired,
  onSettingsPress: PropTypes.func.isRequired,
  onEditPress: PropTypes.func.isRequired,
};
