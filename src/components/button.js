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
    iconSize: 12,
  },
  large: {
    height: 38,
    fontSize: FONT_SIZES.large,
    fontWeight: FONT_WEIGHTS.semiBold,
    iconSize: 18,
  },
};

const Button = ({
  onPress = () => undefined,
  text,
  color = COLORS.primary,
  textColor = COLORS.white,
  icon,
  size = BUTTON_SIZES.regular,
}) => {
  const [pressed, setPressed] = useState(false);
  const round = text == null && icon != null;
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ButtonWrapper
        pressed={pressed}
        color={color}
        height={size.height}
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
};
