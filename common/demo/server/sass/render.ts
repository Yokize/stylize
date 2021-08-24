import fiber from 'fibers';
import { resolve } from 'path';
// prettier-ignore
import { render, ImporterReturnType,
  Result, SassException, Options } from 'sass';
import { compileTpl } from '@server/template/compileTpl';
import { validateCss } from '@server/css/validateCss';
import type { CodeFragment } from '@base/code';

/**
 * Helper resolves path to external library.
 * @param path Library path.
 * @returns Import config.
 */
function importer(path: string): ImporterReturnType {
  return { file: path?.[0] === '~' ? resolve(process.cwd(), 'node_modules', path.substr(1)) : path };
}

/**
 * Get the code example with `import `in Sass syntax.
 * @param path Path to template.
 * @param context Render context.
 * @returns Code fragment.
 */
async function getImport(path: string, context: Record<string, string>): Promise<CodeFragment> {
  return { lang: 'scss', meta: 'import', code: await compileTpl(resolve(path, 'import.hbs'), context) };
}

/**
 * Get the code example with `usage` in Sass syntax.
 * @param path Path to template.
 * @param context Render context.
 * @returns Code fragment.
 */
async function getUsage(path: string, context: Record<string, string>): Promise<CodeFragment> {
  return { lang: 'scss', meta: 'import', code: await compileTpl(resolve(path, 'usage.hbs'), context) };
}

/**
 * Render and validate the Sass source code to CSS.
 * @param path Path to template.
 * @param context Render context.
 * @returns Code fragment.
 */
async function renderResult(path: string, context: Record<string, string>): Promise<CodeFragment> {
  const data: string = await compileTpl(resolve(path, 'result.hbs'), context);
  const fragment: CodeFragment = await new Promise<CodeFragment>((resolve: any): void => {
    render(<any>{ importer, fiber, sourceMap: false, data }, (err: SassException, result: Result): void => {
      resolve({ lang: 'css', meta: 'result', ...(err ? { error: err.formatted } : { code: result.css.toString() }) });
    });
  });

  return fragment.error ? fragment : { ...fragment, warnings: await validateCss(fragment.code) };
}

/**
 * Base renderer used to created code fragments.
 * @param path Path to template.
 * @param context Render context.
 * @returns Code fragments.
 */
export async function baseRender(path: string, context: Record<string, string>): Promise<CodeFragment[]> {
  return [await getImport(path, context), await getUsage(path, context), await renderResult(path, context)];
}
