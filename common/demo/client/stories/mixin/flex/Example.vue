<template lang="pug">
  .example
    BaseArrow.example__arrow(
      :class="getArrowCss(mainAxisDirection)",
      :direction="mainAxisDirection")
      BaseLabel
        | main axis
    BaseArrow.example__arrow(
      :class="getArrowCss(crossAxisDirection)",
      :direction="crossAxisDirection")
      BaseLabel
        | cross axis
    slot(name="before")
    BaseBlock#result(size="x-large")
      BaseBlock(
        v-for="index in children",
        size="x-small")
        | {{ index }}
    slot(name="after")
</template>

<script lang="ts">
  import { computed, PropType, Ref } from 'vue';
  import BaseArrow from '@client/base/BaseArrow.vue';
  import BaseLabel from '@client/base/BaseLabel.vue';
  import BaseBlock from '@client/base/BaseBlock.vue';
  import { baseSetup } from '@client/stories/base/setup';

  export default {
    // Name of the component.
    name: 'Example',
    // Deps of the component.
    components: {
      BaseArrow,
      BaseLabel,
      BaseBlock
    },
    // Props of the component.
    props: {
      direction: {
        type: String as PropType<string>
      },
      children: {
        type: Number as PropType<number>
      }
    },
    // Setup of the component.
    setup: (props): Record<string, Ref> => ({
      mainAxisDirection: computed((): string => {
        if (props.direction === 'row' || props.direction === '_empty_') return 'right';
        if (props.direction === 'row-reverse') return 'left';
        if (props.direction === 'column') return 'bottom';
        if (props.direction === 'column-reverse') return 'top';
      }),
      crossAxisDirection: computed((): string => {
        if (props.direction === 'row' || props.direction === '_empty_') return 'bottom';
        if (props.direction === 'row-reverse') return 'top';
        if (props.direction === 'column') return 'right';
        if (props.direction === 'column-reverse') return 'left';
      }),
      getArrowCss(direction: string): string {
        return direction === 'left' || direction === 'right'
          ? // Align arrow horizontally.
            'example__arrow--horizontal'
          : // Align arrow vertically.
            'example__arrow--vertical';
      }
    })
  };
</script>

<style lang="scss" scoped>
  @use '~@stylize/sass-mixin/position' as *;
  @use 'client/base/style/variable' as *;

  .example {
    #result {
      overflow: hidden;
      max-height: 220px;
    }

    &__arrow {
      &--horizontal {
        @include absolute(0 0 null 0);

        ::v-deep(.base-arrow__text) {
          padding: 0 0 0 30px;
        }
      }

      &--vertical {
        @include absolute(0 null 0 0);

        ::v-deep(.base-arrow__text) {
          padding: 0 0 30px 0;
        }
      }
    }
  }
</style>
