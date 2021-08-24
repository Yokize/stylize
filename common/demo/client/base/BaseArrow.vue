<template lang="pug">
  .base-arrow(:class="direction")
    .base-arrow__text
      slot
</template>

<script lang="ts">
  import type { PropType } from 'vue';

  export default {
    // Name of the component.
    name: 'BaseArrow',
    // Props of the component.
    props: {
      direction: {
        type: String as PropType<string>,
        default: 'right'
      }
    }
  };
</script>

<style lang="scss" scoped>
  @use 'style/variable' as *;
  @use '~@stylize/sass-shape' as *;
  @use '~@stylize/sass-func/list' as *;
  @use '~@stylize/sass-mixin/pseudo' as *;
  @use '~@stylize/sass-mixin/position' as *;

  .base-arrow {
    $root: &;
    position: relative;

    &.left,
    &.right {
      border-bottom: 1px solid $arrow__color;
    }

    &.left {
      @include after {
        @include absolute($bottom: -5px, $left: -5px);
        @include triangle(left, $arrow__color, $arrow__size);
      }
    }

    &.right {
      @include after {
        @include absolute($bottom: -5px, $right: 0);
        @include triangle(right, $arrow__color, $arrow__size);
      }
    }

    &.top,
    &.bottom {
      border-right: 1px solid $arrow__color;

      #{$root}__text {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }
    }

    &.top {
      @include after {
        @include absolute($top: -5px, $right: -5px);
        @include triangle(top, $arrow__color, $arrow__size);
      }
    }

    &.bottom {
      @include after {
        @include absolute($bottom: 0, $right: -5px);
        @include triangle(bottom, $arrow__color, $arrow__size);
      }
    }
  }
</style>
