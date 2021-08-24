<template lang="pug">
  PositionBase(
    :state="state",
    :zIndex="zIndex")
    template(#title)
    | Relative
</template>

<script lang="ts">
  import PositionBase from '../PositionBase.vue';
  import { baseSetup } from '@client/stories/base/setup';
  import type { PropType, Ref } from 'vue';

  export default {
    // Name of the component.
    name: 'Relative',
    // Deps of the component.
    components: { PositionBase },
    // Props of the component.
    props: {
      top: {
        type: String as PropType<string>
      },
      right: {
        type: String as PropType<string>
      },
      bottom: {
        type: String as PropType<string>
      },
      left: {
        type: String as PropType<string>
      },
      zIndex: {
        type: String as PropType<string>
      }
    },
    // Setup of the component.
    setup: (props: unknown): unknown =>
      // Execute the base setup.
      baseSetup('/sass/mixin/position/base/relative', props)
  };
</script>
