<template lang="pug">
  BaseStory(
    :loading="state.loading",
    :error="state.error")
    .content(v-if="state.fragments")
      BaseBlock.ellipse(size="x-large")
        #result.ellipse__block
      BaseCode(
        v-for="item in state.fragments",
        v-bind="item")
</template>

<script lang="ts">
  import BaseCode from '@client/base/BaseCode.vue';
  import BaseBlock from '@client/base/BaseBlock.vue';
  import BaseStory from '@client/base/BaseStory.vue';
  import { baseSetup } from '@client/stories/base/setup';
  import type { PropType, Ref } from 'vue';

  export default {
    // Name of the component.
    name: 'Ellipse',
    // Deps of the component.
    components: { BaseCode, BaseBlock, BaseStory },
    // Props of the component.
    props: {
      width: {
        type: String as PropType<string>
      },
      minWidth: {
        type: String as PropType<string>
      },
      maxWidth: {
        type: String as PropType<string>
      },
      height: {
        type: String as PropType<string>
      },
      minHeight: {
        type: String as PropType<string>
      },
      maxHeight: {
        type: String as PropType<string>
      },
      background: {
        type: String as PropType<string>
      }
    },
    // Setup of the component.
    setup: (props: unknown): unknown =>
      // Execute the base setup.
      baseSetup('/sass/shape/ellipse', props)
  };
</script>

<style lang="scss" scoped>
  @use '~@stylize/sass-mixin/flex' as *;
  @use 'client/base/style/variable' as *;

  .ellipse {
    @include flex(row center center);

    &__block {
      filter: $block__filter;
    }
  }
</style>
