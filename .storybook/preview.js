import { addDecorator, addParameters } from '@storybook/react';
import {
  Asap_400Regular,
  Asap_400Regular_Italic,
  Asap_500Medium,
  Asap_500Medium_Italic,
  Asap_600SemiBold,
  Asap_600SemiBold_Italic,
  Asap_700Bold,
  Asap_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/asap';
import { useCustomFonts } from '../src/utils/hooks';

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
});

const FontDecorator = (storyFn) => {
  useCustomFonts();
  return storyFn();
};

addDecorator(FontDecorator);
