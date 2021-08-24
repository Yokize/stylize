<template lang="pug">
  BaseStory.story(
    :loading="state.loading",
    :error="state.error")
    .story__content(v-if="state.fragments")
      BaseBlock.circle(size="x-large")
        #result.circle__block
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
    name: 'Circle',
    // Deps of the component.
    components: { BaseCode, BaseBlock, BaseStory },
    // Props of the component.
    props: {
      size: {
        type: String as PropType<string>
      },
      minSize: {
        type: String as PropType<string>
      },
      maxSize: {
        type: String as PropType<string>
      },
      background: {
        type: String as PropType<string>
      }
    },
    // Setup of the component.
    setup: (props: unknown): unknown =>
      // Execute the base setup.
      baseSetup('/sass/shape/circle', props)
  };
</script>

<style lang="scss" scoped>
  @use '~@stylize/sass-mixin/flex' as *;
  @use 'client/base/style/variable' as *;

  .circle {
    @include flex(row center center);

    &__block {
      filter: $block__filter;
    }
  }
</style>
