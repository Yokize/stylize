<template lang="pug">
  .base-nums
    .base-nums__item(
      :key="num",
      v-for="{ num, warnings } in lines")
      tippy(
        v-if="warnings.length",
        :content="combineWarns(warnings)")
        .base-nums__warn
          | {{ num }}
      .base-nums__text(v-else)
        | {{ num }}
</template>

<script lang="ts">
  import 'tippy.js/dist/tippy.css';
  import { Tippy } from 'vue-tippy';
  import { map, times, filter } from 'lodash';
  import { computed, PropType } from 'vue';
  import type { CodeFragment, CodeWarning } from '@base/code';

  export default {
    // Name of the component.
    name: 'BaseNums',
    // Deps of the component.
    components: { Tippy },
    // Props of the component.
    props: {
      code: {
        type: String as PropType<string>,
        default: null
      },
      warnings: {
        type: Array as PropType<any>,
        default: null
      }
    },
    // Setup hook of the component.
    setup: (props: any) => ({
      lines: computed((): unknown => props.code
        ? times(props.code.split('\n').length, (num: number) => ({
            num: num + 1,
            warnings: filter(props.warnings, { line: num + 1 })
          }))
        : []),
      combineWarns: (warnings: CodeWarning[]): string =>
        map(warnings, (warning: CodeWarning) => warning.message).join('\n')
    })
  };
</script>

<style lang="scss">
  @use 'style/variable' as *;
  @use '~@stylize/sass-mixin/flex' as *;

  .base-nums {
    font: $nums__font;
    color: $nums__color;
    padding: $nums__padding;
    border-right: $nums__border;
    transform: translateY(1px);
    @include flex(column);

    &__item {
      user-select: none;
      text-align: center;
      margin: $nums__margin;
      min-width: $nums__min-width;
    }

    &__warn {
      color: $nums-warn__color;
      background: $nums-warn__background;
    }
  }
</style>
