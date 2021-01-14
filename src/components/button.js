import React from 'react';
import { TextView } from './typography';
import { ButtonWrapper } from './button.style';
import { colors } from './palette';

const Button = () => {
  return (
    <ButtonWrapper>
      <TextView color={colors.white}>Press me</TextView>
    </ButtonWrapper>
  );
};

export default Button;
