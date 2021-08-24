import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import Rectangle from './Rectangle.vue';

// Name of the story.
const { name } = Rectangle;

// Story metadata.
const meta: Meta = {
  title: `Sass/Shape/${name}`,
  component: Rectangle,
  argTypes: {
    width: string,
    minWidth: string,
    maxWidth: string,
    height: string,
    minHeight: string,
    maxHeight: string,
    radius: string,
    background: color
  }
};

const Story = Template.bind({}, Rectangle);
Story.storyName = name;
Story.args = {
  width: '120px',
  minWidth: '',
  maxWidth: '',
  height: '80px',
  minHeight: '',
  maxHeight: '',
  radius: '10px',
  background: '#f7941e'
};

export { meta as default, Story };
