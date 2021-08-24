import baseRender, { Args } from '../render';
import type { CodeFragment } from '@base/code';

/**
 * Create code fragments based on specified arguments.
 * @param args Arguments.
 * @returns Code fragments.
 */
export default function (args: Args): Promise<CodeFragment[]> {
  return baseRender(__dirname, args);
}
