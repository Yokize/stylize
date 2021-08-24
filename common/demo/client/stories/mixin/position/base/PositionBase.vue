<template lang="pug">
  BaseStory.story(
    :loading="state.loading",
    :error="state.error")
    template(v-if="state.fragments")
      BaseBlock.position(size="x-large")
        BaseBlock#result(size="medium")
          slot(name="title")
          template(v-if="zIndex")
            .hint Z-index: {{ zIndex }}
          template(v-else)
            .hint auto
        BaseBlock.position_block(size="medium")
          | Z-index: 2
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
    name: 'Absolute',
    // Deps of the component.
    components: { BaseCode, BaseBlock, BaseStory },
    // Props of the component.
    props: {
      state: {
        type: Object as PropType<any>
      },
      zIndex: {
        type: String as PropType<string>
      }
    }
  };
</script>

<style lang="scss" scoped>
  @use '~@stylize/sass-mixin/flex' as *;

  .position {
    @include flex(column center center);

    &__block {
      position: relative;
      z-index: 2;
    }
  }
</style>
