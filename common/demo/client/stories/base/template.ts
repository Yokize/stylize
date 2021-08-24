import { transform } from 'lodash';
// prettier-ignore
import { defineComponent, Component, reactive,
  watch, Ref, toRefs, computed } from 'vue';
import type { Meta } from '@storybook/vue3';

/**
 * Create the component for story with arguments.
 * @param component Component.
 * @param args Arguments to bind.
 * @param meta Story metadata.
 * @returns Component with dynamic args.
 */
export default function Template(component: Component, args: Record<string, any>, { argTypes }: Meta): Component {
  return defineComponent({
    // Create dynamic component.
    template: '<component :is="component" v-bind="args" />',
    // Create props based on arg types.
    props: Object.keys(argTypes),
    // Setup hook of the component.
    setup: (props) => {
      // Create dynamic args.
      const dynamicArgs = reactive(args);
      // Watch changes to props.
      watch(props, (): void => {
        Object.keys(argTypes).forEach((key: string): void => {
          dynamicArgs[key] = props[key];
        });
      });

      return { component, args: dynamicArgs };
    }
  });
}
