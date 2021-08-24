<template lang="pug">
  .base-label
    slot
</template>

<script lang="ts">
  export default {
    name: 'BaseLabel'
  };
</script>

<style lang="scss" scoped>
  @use 'style/variable' as *;

  .base-label {
    font: $label__font;
    color: $label__color;
  }
</style>
