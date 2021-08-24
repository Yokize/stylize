<template lang="pug">
  .base-block(:class="size")
    slot
</template>

<script lang="ts">
  import type { PropType } from 'vue';

  export default {
    // Name of the component.
    name: 'BaseBlock',
    // Props of the component.
    props: {
      size: {
        type: String as PropType<string>,
        default: 'x-large'
      }
    }
  };
</script>

<style lang="scss" scoped>
  @use 'style/variable' as *;
  @use '~@stylize/sass-func/list' as *;
  @use '~@stylize/sass-mixin/flex' as *;

  .base-block {
    cursor: default;
    position: relative;
    box-sizing: border-box;
    font: $block__font;
    color: $block__color;
    padding: $block__padding;
    border: $block-lvl1__border;
    background: $block-lvl1__background;
    box-shadow: $block-lvl1__box-shadow;
    border-radius: $block__border-radius;

    & & {
      margin: $block-lvl2__margin;
      filter: $block-lvl2__filter;
      border: $block-lvl2__border;
      background: $block-lvl2__background;
      box-shadow: $block-lvl2__box-shadow;
      @include flex(column center center);
    }

    $size: x-small, small, medium, large, x-large;
    @for $index from 1 through length($size) {
      &.#{nth($size, $index)} {
        min-width: $index * 40px;
        min-height: $index * 40px;
      }
    }
  }
</style>
