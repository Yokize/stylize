import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import { top, right, bottom, left, zIndex } from '../argType';
import StickyBase from './StickyBase.vue';

// Name of the story.
const { name } = StickyBase;

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

const Story = Template.bind({}, StickyBase);
Story.storyName = name;
Story.args = {
  top: '10px',
  right: '50%',
  bottom: '',
  left: '',
  zIndex: '3'
};

export { meta as default, Story };
