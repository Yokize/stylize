import { baseRender } from '@server/sass/render';
import { createSassList } from '@server/sass/args';
import type { CodeFragment } from '@base/code';

/**
 * Describes the render arguments.
 */
export interface Args {
  direction?: string;
  main?: string;
  cross?: string;
  wrap?: string;
  content?: string;
}

/**
 * Create code fragments based on specified arguments.
 * @param base Base path.
 * @param args Arguments.
 * @returns Code fragments.
 */
export default function (base: string, args: Args): Promise<CodeFragment[]> {
  return baseRender(base, {
    args: createSassList([args.direction, args.main, args.cross, args.wrap, args.content])
  });
}
