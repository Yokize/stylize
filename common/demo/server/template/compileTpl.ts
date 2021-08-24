import { readFile } from 'fs';
import { compile } from 'handlebars';

/**
 * Read template and compile it with context.
 * @param path Path to the template.
 * @param context Compile context.
 * @returns Compiled template.
 */
export function compileTpl(path: string, context: Record<string, string>): Promise<string> {
  return new Promise((resolve: (data: string) => void): void => {
    readFile(path, (err: Error | null, data: Buffer): void => resolve(data.toString()));
  }).then((template: string): string => compile(template)(context));
}
