import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import { top, right, bottom, left, zIndex } from '../argType';
import RelativeBase from './RelativeBase.vue';

// Name of the story.
const { name } = RelativeBase;

// Story metadata.
const meta: Meta = {
  title: `Sass/Mixin/Position/Base/${name}`,
  argTypes: {
    top,
    right,
    bottom,
    left,
    zIndex
  }
};

const Story = Template.bind({}, RelativeBase);
Story.storyName = name;
Story.args = {
  top: '50%',
  right: '',
  bottom: '',
  left: '',
  zIndex: '3'
};

export { meta as default, Story };
