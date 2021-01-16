import React, { useState } from 'react';
import { fontWeights, TextView } from './typography';
import { ButtonWrapper } from './button.style';
import { colors } from './palette';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { ICON_KEYS, ICONS } from './icons';
import { Icon } from './icon';

const Button = ({
  onPress = () => undefined,
  text,
  color = colors.Primary,
  textColor = colors.white,
  icon,
}) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ButtonWrapper pressed={pressed} color={color}>
        <TextView color={textColor} weight={fontWeights.semiBold}>
          {text}
        </TextView>
        {icon && <Icon icon={ICONS.get(icon)} color={textColor} />}
      </ButtonWrapper>
    </Pressable>
  );
};

export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(colors)),
  textColor: PropTypes.oneOf(Object.values(colors)),
  icon: PropTypes.oneOf(ICON_KEYS),
};
