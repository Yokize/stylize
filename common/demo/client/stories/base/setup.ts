import { toArray, find, map, throttle } from 'lodash';
import axios, { AxiosResponse } from 'axios';
// prettier-ignore
import { onMounted, onUnmounted, Ref, ref,
  toRefs, watch, reactive } from 'vue';
import type { CodeFragment } from '@base/code';

//
let cancel = axios.CancelToken.source();

/**
 * Base setup for story to retrieve code fragments.
 * @param url Url to get code fragments.
 * @param params Parameters which send to api.
 * @returns Component data.
 */
export function baseSetup(url: string, params: any): unknown {
  // Create reactive component state.
  const state = reactive({ error: null, loading: null, fragments: null });

  // Get code fragments from API.
  function getCodeFragments(): Promise<unknown> {
    state.loading = true;
    cancel.cancel();
    cancel = axios.CancelToken.source();

    return axios
      .post(url, params, { cancelToken: cancel.token })
      .then(({ data }: AxiosResponse<CodeFragment[]>): void => {
        state.loading = false;
        // Code fragments.
        state.fragments = data;
        // Aggregated errors.
        state.error = data
          ?.filter(({ error }: CodeFragment): boolean => !!error)
          ?.map(({ error }: CodeFragment): string => error)
          ?.join('\n');

        addStyleElement(find(data, { meta: 'result' }).code);
      })
      .catch((err): void => {
        if (!axios.isCancel(err))
          state.error = 'Could not retrieve';
      });
  }

  // Hook on component mount.
  onMounted(getCodeFragments);

  // Hook on component unmount.
  onUnmounted(removeStyleElement);

  // Watch changes in params.
  watch(params, throttle(getCodeFragments, 100));

  // Returns the component data.
  return { state };
}

/**
 * Create dynamically generated style element with defined content.
 * @param content Element content.
 */
export function addStyleElement(content: string): void {
  // Remove previous style.
  removeStyleElement();

  // Create and append new style.
  const style: HTMLStyleElement = createStyleElement();
  style.appendChild(document.createTextNode(content));
  document.head.appendChild(style);
}

/**
 * Create style element and mark as dynamically generated.
 * @returns Created style element.
 */
export function createStyleElement(): HTMLStyleElement {
  const style: HTMLStyleElement = document.createElement('style');
  style.setAttribute('data-generated', '');

  return style;
}

/**
 * Remove dynamically generated style elements.
 */
export function removeStyleElement(): void {
  // Remove style element from head.
  toArray(document.querySelectorAll('style[data-generated]'))?.map(
    (el: Element): Element => el.parentNode.removeChild(el)
  );
}
