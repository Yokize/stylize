<template lang="pug">
  .base-code
    BaseNums.base-code__nums(
      :code="code",
      :warnings="warnings")
    BaseCopy.base-code__copy(
      :title="lang",
      :content="code")
    .base-code__html(v-html="html")
</template>

<script lang="ts">
  import 'tippy.js/dist/tippy.css';
  import 'highlight.js/styles/github.css';
  import hjs from 'highlight.js';
  // prettier-ignore
  import { ref, Ref, toRefs, PropType,
    watch, computed } from 'vue';
  import BaseCopy from './BaseCopy.vue';
  import BaseNums from './BaseNums.vue';
  import type { CodeFragment, CodeWarning } from '@base/code';

  export default {
    // Name of the component.
    name: 'BaseCode',
    // Deps of the component.
    components: { BaseCopy, BaseNums },
    // Props of the component.
    props: {
      lang: {
        type: String as PropType<string>,
        default: null
      },
      code: {
        type: String as PropType<string>,
        default: null
      },
      warnings: {
        type: Array as PropType<CodeWarning[]>,
        default: null
      }
    },
    // Setup hook of the component.
    setup: (props: any) => ({
      html: computed((): string => {
        return props.code ? hjs.highlight(props.lang, props.code).value : null;
      })
    })
  };
</script>

<style lang="scss">
  @use 'style/variable' as *;
  @use '~@stylize/sass-mixin/flex' as *;
  @use '~@stylize/sass-mixin/position' as *;

  .base-code {
    white-space: pre;
    position: relative;
    font: $code__font;
    margin: $code__margin;
    padding: $code__padding;
    background: $code__background;
    @include flex(row);

    &__html {
      padding: $code-html__padding;
    }

    &__copy {
      @include absolute(8px 8px);
    }
  }
</style>
