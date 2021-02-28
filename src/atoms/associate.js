import React from 'react';
import {
  CloseWrapper,
  EditWrapper,
  IconWrapper,
  ProfileImage,
  SmallProfileImage,
  Wrapper,
} from './associate.style';
import { FONT_WEIGHTS, TextView } from './typography';
import PropTypes from 'prop-types';
import { COLORS } from './palette';
import { Icon } from './icon';
import { ICONS } from './icons';
import Button, { BUTTON_SIZES } from './button';

const getName = (prefix, firstName, lastName) => {
  let name = '';
  if (prefix && typeof prefix === 'string') {
    name += prefix + ' ';
  }
  name += firstName + ' ' + lastName;
  return name;
};

const Associate = ({ image, prefix, firstName, lastName }) => (
  <Wrapper>
    <ProfileImage source={{ uri: image }} />
    <TextView weight={FONT_WEIGHTS.regular}>
      {getName(prefix, firstName, lastName)}
    </TextView>
  </Wrapper>
);

const EditAssociate = ({
  image,
  prefix,
  firstName,
  lastName,
  approved,
  onDeletePress,
}) => (
  <EditWrapper color={approved ? COLORS.primary : COLORS.lightGrey}>
    <SmallProfileImage source={{ uri: image }} />
    <TextView
      weight={FONT_WEIGHTS.regular}
      color={approved ? COLORS.white : COLORS.darkGrey}
    >
      {getName(prefix, firstName, lastName)}
    </TextView>
    {approved && (
      <IconWrapper>
        <Icon
          icon={ICONS.get('checkmark')}
          color={COLORS.white}
          width={15}
          height={15}
        />
      </IconWrapper>
    )}
    <CloseWrapper>
      <Button
        icon="cross"
        onPress={onDeletePress}
        size={{ ...BUTTON_SIZES.regular, height: 15, iconSize: 10 }}
        color={approved ? COLORS.primary : COLORS.lightGrey}
        textColor={approved ? COLORS.white : COLORS.darkGrey}
      />
    </CloseWrapper>
  </EditWrapper>
);

export default Associate;
Associate.Edit = EditAssociate;

const AssociatePropTypes = {
  image: PropTypes.string,
  prefix: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

Associate.propTypes = AssociatePropTypes;
EditAssociate.propTypes = {
  ...AssociatePropTypes,
  onDeletePress: PropTypes.func.isRequired,
};
