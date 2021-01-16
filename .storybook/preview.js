import { addDecorator, addParameters } from '@storybook/react';
import { useCustomFonts } from '../src/utils/hooks';
import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

configureActions({
  depth: 5,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
});

const FontDecorator = (storyFn) => {
  useCustomFonts();
  return storyFn();
};

addDecorator(FontDecorator);
addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);
