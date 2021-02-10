import React from 'react';
import {
  LeftButtonsWrapper,
  MenuWrapper,
  StyledInput,
  Wrapper,
} from './input.style';
import { COLORS } from './palette';
import { FONT_SIZES, FONT_WEIGHTS } from './typography';
import Button from './button';
import PropTypes from 'prop-types';

// TODO: Fix a bug where you can't close the keyboard...

const Input = ({
  value,
  onChange = () => undefined,
  onPhotoButtonPress = () => undefined,
  onMicButtonPress = () => undefined,
  onSaveButtonPress = () => undefined,
  expanded = false,
}) => {
  return (
    <Wrapper>
      <StyledInput
        multiline
        value={value}
        onChangeText={onChange}
        placeholder="Type something..."
        placeholderTextColor={COLORS.lightGrey}
        weight={FONT_WEIGHTS.regular}
        size={FONT_SIZES.small}
        color={COLORS.darkGrey}
        expanded={expanded}
      />
      <MenuWrapper>
        <LeftButtonsWrapper>
          <Button
            onPress={onPhotoButtonPress}
            icon="photo"
            color={COLORS.grey}
          />
          <Button
            onPress={onMicButtonPress}
            icon="microphone"
            color={COLORS.grey}
          />
        </LeftButtonsWrapper>
        <Button
          onPress={onSaveButtonPress}
          text="Save"
          color={COLORS.lightGreen}
        />
      </MenuWrapper>
    </Wrapper>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onPhotoButtonPress: PropTypes.func,
  onMicButtonPress: PropTypes.func,
  onSaveButtonPress: PropTypes.func,
  expanded: PropTypes.bool,
};
