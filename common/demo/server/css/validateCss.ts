import w3c from 'w3c-css';
import type { CodeWarning } from '@base/code';

/**
 * Validate css using w3c validator.
 * @param text Css code.
 * @returns Code warnings.
 */
export function validateCss(text: string): Promise<CodeWarning[]> {
  return new Promise<[]>((resolve: any): void =>
    w3c.validate({ text }, (err: Error, data: any): void =>
      resolve(
        [...data.errors].map(
          ({ line, message }): CodeWarning => ({
            line: parseInt(line),
            message
          })
        )
      )
    )
  );
}
