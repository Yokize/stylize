<template lang="pug">
  .base-copy(@click="copy")
    .base-copy__title
      | {{ title }}
    InlineSvg(:src="icon")
</template>

<script lang="ts">
  import copyClip from 'copy-to-clipboard';
  import InlineSvg from 'vue-inline-svg';
  import { ref, Ref, PropType, computed, ComputedRef } from 'vue';
  import copySvgPath from './asset/copy.svg';
  import doneSvgPath from './asset/done.svg';

  export default {
    // Name of the component.
    name: 'BaseCopy',
    // Deps of the component.
    components: { InlineSvg },
    // Props of the component.
    props: {
      title: {
        type: String as PropType<string>
      },
      content: {
        type: String as PropType<string>
      }
    },
    // Setup hook of the component.
    setup(pros: any) {
      // Determine whether content is copied.
      const copied: Ref = ref(null);
      // Determine icon which identify copied state.
      const icon: ComputedRef = computed((): string => {
        return copied.value ? doneSvgPath : copySvgPath;
      });
      // Method to copy content to clipboard and change state.
      const copy: () => void = (): void => {
        copied.value = true;
        copyClip(pros.content);
        setTimeout((): void => {
          copied.value = false;
        }, 1000);
      };

      return { icon, copy };
    }
  };
</script>

<style lang="scss">
  @use 'style/variable' as *;
  @use '~@stylize/sass-mixin/size' as *;
  @use '~@stylize/sass-mixin/support' as *;
  @use '~@stylize/sass-mixin/flex' as *;
  @use '~@stylize/sass-mixin/position' as *;

  .base-copy {
    cursor: pointer;
    font: $copy__font;
    fill: $copy__color;
    color: $copy__color;
    padding: $copy__padding;
    @include flex(row center center);

    &__title {
      padding: 0 6px 0 0;
    }

    @include support-hover {
      &:hover {
        fill: $copy__color--hover;
        color: $copy__color--hover;
      }
    }
  }
</style>
