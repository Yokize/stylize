import { baseRender } from '@server/sass/render';
import { createSassList } from '@server/sass/args';
import type { CodeFragment } from '@base/code';

/**
 * Describes the render arguments.
 */
export interface Args {
  offset?: string;
  zIndex?: string;
}

/**
 * Create code fragments based on specified arguments.
 * @param base Base path.
 * @param args Arguments.
 * @returns Code fragments.
 */
export default function (base: string, args: Args): Promise<CodeFragment[]> {
  return baseRender(base, {
    args: createSassList([args.offset, args.zIndex])
  });
}
