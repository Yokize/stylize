<template lang="pug">
  .base-loader
    InlineSvg(:src="loaderSvgPath")
</template>

<script lang="ts">
  import InlineSvg from 'vue-inline-svg';
  import loaderSvgPath from './asset/loader.svg';
  import type { PropType } from 'vue';

  export default {
    // Name of the component.
    name: 'BaseLoader',
    // Deps of the component.
    components: { InlineSvg },
    // Setup hook of the component.
    setup: () => ({ loaderSvgPath })
  };
</script>

<style lang="scss" scoped>
  @use '~@stylize/sass-mixin/flex' as *;
  @use '~@stylize/sass-mixin/position' as *;

  .base-loader {
    @include absolute-cover;
    @include flex(column center center);
  }
</style>
