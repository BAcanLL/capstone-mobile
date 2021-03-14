import { Modal } from 'react-native';
import { ModalContent, ModalWrapper, ScreenDimmer } from './modal.style';
import Button, { BUTTON_SIZES } from './button';
import { COLORS } from './palette';
import React from 'react';

const ModalView = ({ visible, onClosePress, children }) => {
  const isStorybook = !!process.env.STORYBOOK;
  return isStorybook ? null : (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onClosePress}
    >
      <ScreenDimmer />
      <ModalWrapper>
        <ModalContent>{children}</ModalContent>
        <Button
          onPress={onClosePress}
          text="Close"
          color={COLORS.red}
          textColor={COLORS.white}
          size={BUTTON_SIZES.large}
        />
      </ModalWrapper>
    </Modal>
  );
};

export default ModalView;
