import React, { useState } from 'react';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from './typography';
import { ButtonWrapper, IconWrapper } from './button.style';
import { COLORS } from './palette';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { ICON_KEYS, ICONS } from './icons';
import { Icon } from './icon';

export const BUTTON_SIZES = {
  regular: {
    height: 28,
    fontSize: FONT_SIZES.regular,
    fontWeight: FONT_WEIGHTS.semiBold,
    iconSize: 14,
    shadow: false,
  },
  large: {
    height: 38,
    fontSize: FONT_SIZES.large,
    fontWeight: FONT_WEIGHTS.semiBold,
    iconSize: 18,
    shadow: true,
  },
};

const Button = ({
  onPress = () => undefined,
  text,
  color = COLORS.primary,
  textColor = COLORS.white,
  icon,
  size = BUTTON_SIZES.regular,
  disabled = false,
  disablePressStyle = false, // used to override with custom styling
}) => {
  const [pressed, setPressed] = useState(false);
  const round = text == null && icon != null;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ButtonWrapper
        pressed={!disablePressStyle && pressed}
        color={color}
        height={size.height}
        shadow={size.shadow}
        round={round}
      >
        {text && (
          <TextView
            color={textColor}
            size={size.fontSize}
            weight={size.fontWeight}
          >
            {text}
          </TextView>
        )}
        {icon && (
          <IconWrapper round={round}>
            <Icon
              icon={ICONS.get(icon)}
              width={size.iconSize}
              height={size.iconSize}
              color={textColor}
            />
          </IconWrapper>
        )}
      </ButtonWrapper>
    </Pressable>
  );
};

const ToggleButton = ({ onPress, text, initial = false, disabled = false }) => {
  const [isActive, setIsActive] = useState(initial);

  const inactiveSize = {
    ...BUTTON_SIZES.regular,
    fontSize: FONT_SIZES.regular,
  };

  return (
    <Button
      onPress={() => {
        onPress(!isActive);
        setIsActive(!isActive);
      }}
      size={isActive ? BUTTON_SIZES.regular : inactiveSize}
      color={isActive ? COLORS.primary : COLORS.lightGrey}
      text={text}
      textColor={isActive ? COLORS.white : COLORS.darkGrey}
      disabled={disabled}
      disablePressStyle
    />
  );
};

Button.Toggle = ToggleButton;

export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLORS)),
  textColor: PropTypes.oneOf(Object.values(COLORS)),
  icon: PropTypes.oneOf(ICON_KEYS),
  size: PropTypes.shape({
    height: PropTypes.number,
    fontSize: PropTypes.oneOf(Object.values(FONT_SIZES)),
    fontWeight: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  }),
  disabled: PropTypes.bool,
  disablePressStyle: PropTypes.bool,
};

ToggleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  initial: PropTypes.bool,
  disabled: PropTypes.bool,
};
