import type { Component } from 'vue';
import type { Parameters, Decorators } from '@storybook/vue3';

// Parameters are named metadata about a story, typically used
// to control the behavior of Storybook features and addons.
// https://storybook.js.org/docs/react/writing-stories/parameters
export const parameters: Parameters = {
  docs: {
    page: null
  },
  controls: {
    matchers: {
      color: /(background|color)$/i
    }
  }
};

