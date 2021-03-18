import { Modal } from 'react-native';
import { ModalContent, ModalWrapper, ScreenDimmer } from './modal.style';
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
      </ModalWrapper>
    </Modal>
  );
};

export default ModalView;
