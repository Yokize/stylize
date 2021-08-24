import { baseRender } from '@server/sass/render';
import { createSassList, createSizeArg } from '@server/sass/args';
import type { Size } from '@base/size';
import type { CodeFragment } from '@base/code';

/**
 * Describes the render arguments.
 */
interface Args extends Size {
  radius: string;
  background: string;
}

/**
 * Create code fragments based on specified arguments.
 * @param args Arguments.
 * @returns Code fragments.
 */
export default function (args: Args): Promise<CodeFragment[]> {
  return baseRender(__dirname, {
    args: createSassList([
      createSizeArg(args.size, args.minSize, args.maxSize),
      args.radius === '' ? 'null' : args.radius,
      args.background
    ])
  });
}
