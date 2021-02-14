import React from 'react';
import { CheckBox, TextWrapper, Wrapper } from './legal-agreement.style';
import { Icon } from './icon';
import { ICONS } from './icons';
import { COLORS } from './palette';
import { FONT_WEIGHTS, TextView } from './typography';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';

const TEXT = ['I agree to the ', 'Terms of Service ', 'and ', 'Privacy Policy'];

const LegalAgreement = ({ checked, onPress, onTOSClick, onPPClick }) => (
  <Wrapper>
    <Pressable onPress={onPress}>
      <CheckBox checked={checked}>
        {checked && (
          <Icon
            icon={ICONS.get('checkmark')}
            height={12}
            width={12}
            color={COLORS.primary}
          />
        )}
      </CheckBox>
    </Pressable>
    <TextWrapper>
      <TextView weight={FONT_WEIGHTS.regular} color={COLORS.white}>
        {TEXT[0]}
      </TextView>
      <TextView
        weight={FONT_WEIGHTS.bold}
        color={COLORS.white}
        onClick={onTOSClick}
      >
        {TEXT[1]}
      </TextView>
      <TextView weight={FONT_WEIGHTS.regular} color={COLORS.white}>
        {TEXT[2]}
      </TextView>
      <TextView
        weight={FONT_WEIGHTS.bold}
        color={COLORS.white}
        onClick={onPPClick}
      >
        {TEXT[3]}
      </TextView>
    </TextWrapper>
  </Wrapper>
);

export default LegalAgreement;

LegalAgreement.propTypes = {
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onTOSClick: PropTypes.func.isRequired,
  onPPClick: PropTypes.func.isRequired,
};
