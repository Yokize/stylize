import { baseRender } from '@server/sass/render';
import { createSassList } from '@server/sass/args';
import type { CodeFragment } from '@base/code';

/**
 * Describes the render arguments.
 */
interface Args {
  direction: string;
  color: string;
  width: string;
  height: string;
}

/**
 * Create code fragments based on specified arguments.
 * @param args Arguments.
 * @returns Code fragments.
 */
export default function (args: Args): Promise<CodeFragment[]> {
  return baseRender(__dirname, {
    args: createSassList([args.direction, args.color, args.width, args.height])
  });
}
