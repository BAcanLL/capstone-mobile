import React from 'react';
import { FieldInput } from './field.style';
import { COLORS } from './palette';
import { FONT_SIZES, FONT_WEIGHTS } from './typography';
import PropTypes from 'prop-types';

export const FIELD_TYPES = {
  underline: {
    borderLeft: 0,
    borderTop: 0,
    borderRight: 0,
    borderBottom: 1,
    borderRadius: 0,
  },
  bordered: {
    borderLeft: 1,
    borderTop: 1,
    borderRight: 1,
    borderBottom: 1,
    borderRadius: 5,
  },
};

const Field = ({
  value = '',
  onChange,
  placeholder,
  placeholderTextColor = COLORS.lightGrey,
  color = COLORS.lightGrey,
  textColor = COLORS.darkGrey,
  secure = false,
  type = FIELD_TYPES.underline,
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
      size={FONT_SIZES.small}
      {...type}
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
