<template lang="pug">
  BaseError(v-if="error")
    | {{ error }}
  .story(v-else)
    slot
  BaseLoader(v-if="loading")
</template>

<script lang="ts">
  import BaseLoader from './BaseLoader.vue';
  import BaseError from './BaseError.vue';
  import type { PropType } from 'vue';

  export default {
    // Name of the component.
    name: 'BaseStory',
    // Do not inherit attrs.
    inheritAttrs: false,
    // Deps of the component.
    components: { BaseLoader, BaseError },
    // Props of the component.
    props: {
      loading: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      error: {
        type: String as PropType<string>,
        default: null
      }
    }
  };
</script>
