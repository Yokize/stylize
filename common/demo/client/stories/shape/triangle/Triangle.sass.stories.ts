import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import Triangle from './Triangle.vue';

// Name of the story.
const { name } = Triangle;

// Mapping for direction.
const directions = {
  'top': '↑',
  'top-right': '↗',
  'right': '→',
  'bottom-right': '↘',
  'bottom': '↓',
  'bottom-left': '↙',
  'left': '←',
  'top-left': '↖'
};

// Story metadata.
const meta: Meta = {
  title: `Sass/Shape/${name}`,
  component: Triangle,
  argTypes: {
    direction: {
      options: Object.keys(directions),
      control: {
        type: 'inline-radio',
        labels: directions
      }
    },
    color: color,
    width: string,
    height: string
  }
};

const Story = Template.bind({}, Triangle);
Story.storyName = name;
Story.args = {
  direction: 'top',
  color: '#f7941e',
  width: '80px',
  height: ''
};

export { meta as default, Story };
