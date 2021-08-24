<template lang="pug">
  pre.base-error
    slot
</template>

<script lang="ts">
  export default {
    name: 'BaseError'
  };
</script>

<style lang="scss" scoped>
  @use 'style/variable' as *;

  .base-error {
    font: $error__font;
    color: $error__color;
    padding: $error__padding;
    background: $error__background;
  }
</style>
