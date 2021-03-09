import styled, { css } from 'styled-components/native';
import { COLORS } from './palette';
import PropTypes from 'prop-types';

export const FONT_WEIGHTS = {
  regular: 'Regular',
  medium: 'Medium',
  semiBold: 'SemiBold',
  bold: 'Bold',
};

export const FONT_SIZES = {
  title: '24px',
  large: '18px',
  regular: '16px',
  small: '14px',
  timer: '36px',
};

export const textStyle = css`
  margin: 0;
  letter-spacing: 0px;
  font-family: ${(props) =>
    'Asap-' +
    (props.weight || FONT_WEIGHTS.semiBold) +
    (props.italic ? '-Italic' : '')};
  font-size: ${(props) => props.size || FONT_SIZES.regular};
  color: ${(props) => props.color || COLORS.darkGrey};
`;

export const TextView = styled.Text`
  ${textStyle}
`;

TextView.propTypes = {
  color: PropTypes.oneOf(Object.values(COLORS)),
  weight: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  size: PropTypes.oneOf(Object.values(FONT_SIZES)),
  italic: PropTypes.bool,
};
