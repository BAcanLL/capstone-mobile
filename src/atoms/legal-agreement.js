import React from 'react';
import {
  CheckBox,
  CloseButton,
  ModalTitle,
  ModalWrapper,
  ScreenDimmer,
  TextWrapper,
  Wrapper,
} from './legal-agreement.style';
import { Icon } from './icon';
import { ICONS } from './icons';
import { COLORS } from './palette';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from './typography';
import PropTypes from 'prop-types';
import { Pressable, Modal, ScrollView } from 'react-native';
import Button from './button';

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
        onPress={onTOSClick}
      >
        {TEXT[1]}
      </TextView>
      <TextView weight={FONT_WEIGHTS.regular} color={COLORS.white}>
        {TEXT[2]}
      </TextView>
      <TextView
        weight={FONT_WEIGHTS.bold}
        color={COLORS.white}
        onPress={onPPClick}
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

const TOS_TITLE = 'Terms of Service';
const TOS =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae suscipit dui, a tristique est. Fusce sollicitudin tortor at nunc facilisis finibus vehicula eu velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tristique a velit vitae imperdiet. Proin eget aliquam quam. Suspendisse arcu nibh, dapibus vel ante et, malesuada consectetur dolor. Duis cursus ligula quis eros gravida congue. Mauris at tortor at dolor sagittis venenatis id eget diam. Proin maximus tristique sagittis. Curabitur nec nisl in elit venenatis consequat. Nam at nisl accumsan, imperdiet felis vel, commodo ipsum.\n\nMauris fermentum purus eu arcu ultrices dignissim. Ut ut est eget ex dictum auctor non vel sapien. Aliquam volutpat mi ac turpis tempus, sit amet lacinia libero mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin a vulputate leo. Donec efficitur risus vitae erat hendrerit porttitor. Suspendisse orci odio, condimentum sollicitudin mauris id, tempus pharetra neque. Nam pellentesque mauris mi, ac finibus massa pharetra sed. Pellentesque tempus egestas magna. Integer arcu arcu, ornare nec felis non, lobortis tincidunt mauris. Aenean scelerisque ullamcorper dolor, et egestas augue rhoncus eget. Nam tempus euismod lacus sed aliquet. Curabitur dignissim velit non sapien pharetra, id malesuada elit commodo. Suspendisse potenti. Sed semper urna nec justo semper consequat. Pellentesque dignissim turpis eget neque tempor ultrices.\n\nProin quis rhoncus diam. Morbi non risus felis. Aliquam vel mauris imperdiet, facilisis turpis tincidunt, egestas urna. Duis placerat suscipit tortor sit amet efficitur. Praesent ac blandit tortor. Sed hendrerit et diam non condimentum. Donec eget bibendum metus. In hac habitasse platea dictumst. Nulla tempus sem sed libero scelerisque, ut dictum felis eleifend. Proin varius semper mi, at pulvinar lorem gravida sed. Praesent velit ex, maximus facilisis imperdiet at, blandit in lectus. Fusce vel mi sit amet arcu fringilla cursus. Fusce dignissim urna ipsum, sed efficitur quam fringilla quis.\n\nAenean vel risus pellentesque, tristique mi ac, convallis libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel rhoncus tortor. Vestibulum sodales porta nulla et gravida. Nunc tristique, augue in efficitur fermentum, urna risus condimentum leo, gravida dapibus ante leo id lectus. Pellentesque molestie convallis libero, id bibendum diam gravida ut. Morbi interdum ex vel diam tempor, quis rhoncus turpis vulputate. Donec venenatis elementum est, non faucibus ligula. Nullam molestie dolor in lobortis interdum. Nunc pulvinar suscipit neque, in eleifend libero pellentesque non. Vestibulum tristique condimentum nisl nec malesuada. In hac habitasse platea dictumst. Etiam nunc erat, venenatis vitae vulputate malesuada, maximus ut tellus. Ut sagittis libero consectetur sapien elementum hendrerit.\n\nDonec vehicula lorem a massa ultricies, vitae ullamcorper ligula convallis. In hac habitasse platea dictumst. Etiam vel tincidunt justo. Suspendisse in risus eget lorem mattis congue. Nullam elementum dolor in ligula tincidunt tincidunt. Mauris auctor fermentum augue, in mollis elit faucibus non. Fusce feugiat elit quis convallis pellentesque. Nunc nec sapien mauris. Donec rhoncus tortor pharetra elit elementum pulvinar. Sed luctus vehicula vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur at velit vitae massa lobortis imperdiet ac at metus. Suspendisse potenti. Vestibulum in nisl interdum, aliquet augue sed, tincidunt lorem.';
const PP_TITLE = 'Privacy Policy';
const PP =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae suscipit dui, a tristique est. Fusce sollicitudin tortor at nunc facilisis finibus vehicula eu velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tristique a velit vitae imperdiet. Proin eget aliquam quam. Suspendisse arcu nibh, dapibus vel ante et, malesuada consectetur dolor. Duis cursus ligula quis eros gravida congue. Mauris at tortor at dolor sagittis venenatis id eget diam. Proin maximus tristique sagittis. Curabitur nec nisl in elit venenatis consequat. Nam at nisl accumsan, imperdiet felis vel, commodo ipsum.\n\nMauris fermentum purus eu arcu ultrices dignissim. Ut ut est eget ex dictum auctor non vel sapien. Aliquam volutpat mi ac turpis tempus, sit amet lacinia libero mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin a vulputate leo. Donec efficitur risus vitae erat hendrerit porttitor. Suspendisse orci odio, condimentum sollicitudin mauris id, tempus pharetra neque. Nam pellentesque mauris mi, ac finibus massa pharetra sed. Pellentesque tempus egestas magna. Integer arcu arcu, ornare nec felis non, lobortis tincidunt mauris. Aenean scelerisque ullamcorper dolor, et egestas augue rhoncus eget. Nam tempus euismod lacus sed aliquet. Curabitur dignissim velit non sapien pharetra, id malesuada elit commodo. Suspendisse potenti. Sed semper urna nec justo semper consequat. Pellentesque dignissim turpis eget neque tempor ultrices.\n\nProin quis rhoncus diam. Morbi non risus felis. Aliquam vel mauris imperdiet, facilisis turpis tincidunt, egestas urna. Duis placerat suscipit tortor sit amet efficitur. Praesent ac blandit tortor. Sed hendrerit et diam non condimentum. Donec eget bibendum metus. In hac habitasse platea dictumst. Nulla tempus sem sed libero scelerisque, ut dictum felis eleifend. Proin varius semper mi, at pulvinar lorem gravida sed. Praesent velit ex, maximus facilisis imperdiet at, blandit in lectus. Fusce vel mi sit amet arcu fringilla cursus. Fusce dignissim urna ipsum, sed efficitur quam fringilla quis.\n\nAenean vel risus pellentesque, tristique mi ac, convallis libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel rhoncus tortor. Vestibulum sodales porta nulla et gravida. Nunc tristique, augue in efficitur fermentum, urna risus condimentum leo, gravida dapibus ante leo id lectus. Pellentesque molestie convallis libero, id bibendum diam gravida ut. Morbi interdum ex vel diam tempor, quis rhoncus turpis vulputate. Donec venenatis elementum est, non faucibus ligula. Nullam molestie dolor in lobortis interdum. Nunc pulvinar suscipit neque, in eleifend libero pellentesque non. Vestibulum tristique condimentum nisl nec malesuada. In hac habitasse platea dictumst. Etiam nunc erat, venenatis vitae vulputate malesuada, maximus ut tellus. Ut sagittis libero consectetur sapien elementum hendrerit.\n\nDonec vehicula lorem a massa ultricies, vitae ullamcorper ligula convallis. In hac habitasse platea dictumst. Etiam vel tincidunt justo. Suspendisse in risus eget lorem mattis congue. Nullam elementum dolor in ligula tincidunt tincidunt. Mauris auctor fermentum augue, in mollis elit faucibus non. Fusce feugiat elit quis convallis pellentesque. Nunc nec sapien mauris. Donec rhoncus tortor pharetra elit elementum pulvinar. Sed luctus vehicula vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur at velit vitae massa lobortis imperdiet ac at metus. Suspendisse potenti. Vestibulum in nisl interdum, aliquet augue sed, tincidunt lorem.';

const ScreenWidthModal = ({
  visible,
  onExitPress,
  onRequestClose,
  children,
}) => {
  const isStorybook = !!process.env.STORYBOOK;
  return isStorybook ? null : (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
    >
      <ScreenDimmer />
      <ModalWrapper>
        {children}
        <CloseButton>
          <Button
            onPress={onExitPress}
            icon="cross"
            color={COLORS.white}
            textColor={COLORS.grey}
          />
        </CloseButton>
      </ModalWrapper>
    </Modal>
  );
};

export const TOSModal = ({ visible, onExitPress }) => (
  <ScreenWidthModal
    visible={visible}
    onExitPress={onExitPress}
    onRequestClose={onExitPress}
  >
    <ModalTitle>
      <TextView size={FONT_SIZES.large}>{TOS_TITLE}</TextView>
    </ModalTitle>
    <ScrollView>
      <TextView weight={FONT_WEIGHTS.regular}>{TOS}</TextView>
    </ScrollView>
  </ScreenWidthModal>
);

export const PPModal = ({ visible, onExitPress }) => (
  <ScreenWidthModal
    visible={visible}
    onExitPress={onExitPress}
    onRequestClose={onExitPress}
  >
    <ModalTitle>
      <TextView size={FONT_SIZES.large}>{PP_TITLE}</TextView>
    </ModalTitle>
    <ScrollView>
      <TextView weight={FONT_WEIGHTS.regular}>{PP}</TextView>
    </ScrollView>
  </ScreenWidthModal>
);

const modalPropTypes = {
  visible: PropTypes.bool.isRequired,
  onExitPress: PropTypes.func.isRequired,
};

TOSModal.propTypes = modalPropTypes;
PPModal.propTypes = modalPropTypes;
