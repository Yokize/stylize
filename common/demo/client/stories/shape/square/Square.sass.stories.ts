import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import Square from './Square.vue';

// Name of the story.
const { name } = Square;

// Story metadata.
const meta: Meta = {
  title: `Sass/Shape/${name}`,
  component: Square,
  argTypes: {
    size: string,
    minSize: string,
    maxSize: string,
    radius: string,
    background: color
  }
};

const Story = Template.bind({}, Square);
Story.storyName = name;
Story.args = {
  size: '120px',
  minSize: '',
  maxSize: '',
  radius: '10px',
  background: '#f7941e'
};

export { meta as default, Story };
