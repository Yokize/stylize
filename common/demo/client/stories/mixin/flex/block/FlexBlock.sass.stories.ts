import { Meta } from '@storybook/vue3';
import Template from '@client/stories/base/template';
import { string, color } from '@client/stories/base/argType';
import { main, direction, cross, wrap, content, children, display } from '../argType';
import FlexBlock from './FlexBlock.vue';

// Name of the story.
const { name } = FlexBlock;

// Story metadata.
const meta: Meta = {
  title: `Sass/Mixin/Flex/${name}`,
  component: FlexBlock,
  argTypes: {
    direction,
    main,
    cross,
    wrap,
    content,
    children
  }
};

const Story = Template.bind({}, FlexBlock);
Story.storyName = name;
Story.args = {
  direction: 'row',
  main: 'center',
  cross: 'center',
  wrap: 'nowrap',
  content: 'normal',
  children: 3
};

export { meta as default, Story };
