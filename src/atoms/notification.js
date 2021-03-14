import React from 'react';
import { CloseButton, Wrapper } from './notification.style';
import { FONT_SIZES, TextView } from './typography';
import { COLORS } from './palette';
import Button from './button';

const Notification = ({
  text,
  color = COLORS.red,
  opacity = 1,
  onClosePress,
}) => {
  return (
    <Wrapper color={color} opacity={opacity}>
      <TextView color={COLORS.white} size={FONT_SIZES.regular}>
        {text}
      </TextView>
      <CloseButton>
        <Button
          onPress={onClosePress}
          icon="cross"
          color={color}
          textColor={COLORS.white}
        />
      </CloseButton>
    </Wrapper>
  );
};

export default Notification;
