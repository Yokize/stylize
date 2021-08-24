import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import Ellipse from './Ellipse.vue';

// Name of the story.
const { name } = Ellipse;

// Story metadata.
const meta: Meta = {
  title: `Sass/Shape/${name}`,
  component: Ellipse,
  argTypes: {
    width: string,
    minWidth: string,
    maxWidth: string,
    height: string,
    minHeight: string,
    maxHeight: string,
    background: color
  }
};

const Story = Template.bind({}, Ellipse);
Story.storyName = name;
Story.args = {
  width: '120px',
  minWidth: '',
  maxWidth: '',
  height: '80px',
  minHeight: '',
  maxHeight: '',
  background: '#f7941e'
};

export { meta as default, Story };
