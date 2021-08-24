import { addons } from '@storybook/addons';
import theme from './manager-theme';

addons.setConfig({
  theme,
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  }
});
