<template lang="pug">
  BaseStory.story(
    :loading="state.loading",
    :error="state.error")
    .story__demo(v-if="state.fragments")
      Example(
        :direction="direction",
        :children="children")
        template(#before)
          span.story__inline
            | [Inline]
        template(#after)
          span.story__inline
            | [Inline]

    BaseCode(
      v-if="state.fragments",
      v-for="item in state.fragments",
      v-bind="item")
</template>

<script lang="ts">
  import { computed, PropType, Ref } from 'vue';
  import BaseCode from '@client/base/BaseCode.vue';
  import BaseStory from '@client/base/BaseStory.vue';
  import { baseSetup } from '@client/stories/base/setup';
  import Example from '../Example.vue';

  export default {
    // Name of the component.
    name: 'Inline',
    // Deps of the component.
    components: {
      Example,
      BaseCode,
      BaseStory
    },
    // Props of the component.
    props: {
      display: {
        type: String as PropType<string>
      },
      direction: {
        type: String as PropType<string>
      },
      main: {
        type: String as PropType<string>
      },
      cross: {
        type: String as PropType<string>
      },
      wrap: {
        type: String as PropType<string>
      },
      content: {
        type: String as PropType<string>
      },
      children: {
        type: Number as PropType<number>,
        default: 4
      }
    },
    // Setup of the component.
    setup: (props: unknown): unknown =>
      // Execute the base setup.
      baseSetup(`/sass/mixin/flex/inline`, props)
  };
</script>

<style lang="scss" scoped>
  .story {
    margin-right: 30px;

    &__demo {
      position: relative;
      padding: 30px 0 0 30px;
    }

    &__inline {
      padding: 0 15px;
    }
  }
</style>
