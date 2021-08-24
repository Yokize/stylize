import { baseRender } from '@server/sass/render';
import { createSassList, createSizeArg } from '@server/sass/args';
import type { CodeFragment } from '@base/code';
import type { Width, Height } from '@base/size';

/**
 * Describes the render arguments.
 */
interface Args extends Width, Height {
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
      createSizeArg(args.width, args.minWidth, args.maxWidth),
      createSizeArg(args.height, args.minHeight, args.maxHeight),
      args.radius,
      args.background
    ])
  });
}
