import React from 'react';
import { FieldInput } from './field.style';
import { COLORS } from './palette';
import { FONT_SIZES, FONT_WEIGHTS } from './typography';
import PropTypes from 'prop-types';

const Field = ({
  value = '',
  onChange,
  placeholder,
  placeholderTextColor = COLORS.lightGrey,
  color = COLORS.lightGrey,
  textColor = COLORS.darkGrey,
  secure = false,
}) => {
  return (
    <FieldInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secure}
      color={textColor}
      borderColor={color}
      weight={FONT_WEIGHTS.regular}
      size={secure ? FONT_SIZES.regular : FONT_SIZES.small}
    />
  );
};

export default Field;

Field.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.oneOf(Object.values(COLORS)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  textColor: PropTypes.oneOf(Object.values(COLORS)),
  secure: PropTypes.bool,
};
