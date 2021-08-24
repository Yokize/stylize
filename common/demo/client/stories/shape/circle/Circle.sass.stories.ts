import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import Circle from './Circle.vue';

// Name of the story.
const { name } = Circle;

// Story metadata.
const meta: Meta = {
  title: `Sass/Shape/${name}`,
  component: Circle,
  argTypes: {
    size: string,
    minSize: string,
    maxSize: string,
    background: color
  }
};

const Story = Template.bind({}, Circle);
Story.storyName = name;
Story.args = {
  size: '120px',
  minSize: '',
  maxSize: '',
  background: '#f7941e'
};

export { meta as default, Story };
