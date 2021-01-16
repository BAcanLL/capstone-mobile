import styled from 'styled-components/native';
import { colors } from './palette';
import PropTypes from 'prop-types';

export const fontWeights = {
  regular: 'Regular',
  medium: 'Medium',
  semiBold: 'SemiBold',
  bold: 'Bold',
};

export const fontSizes = {
  title: '24px',
  large: '18px',
  regular: '15px',
  small: '13px',
  timer: '36px',
};

export const TextView = styled.Text`
  margin: 0;
  letter-spacing: 0px;
  font-family: ${(props) =>
    'Asap-' +
    (props.weight || fontWeights.regular) +
    (props.italic ? '-Italic' : '')};
  font-size: ${(props) => props.size || fontSizes.regular};
  color: ${(props) => props.color || colors.darkGrey};
`;

TextView.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  weight: PropTypes.oneOf(Object.values(fontWeights)),
  size: PropTypes.oneOf(Object.values(fontSizes)),
  italic: PropTypes.bool,
};
