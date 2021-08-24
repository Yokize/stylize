import { dropRightWhile, isNil } from 'lodash';

/**
 * Determine whether val is empty.
 * @param val Val to check.
 * @returns True in case empty; false otherwise.
 */
export function isEmpty(val: unknown): val is boolean {
  return isNil(val) || val === '_empty_' || val === '';
}

/**
 * Normalize and convert args to Sass List.
 * @param items Items.
 * @returns Sass list.
 */
export function createSassList(items: unknown[]): string {
  // Clear args from redundant values and join in format of Sass List.
  return dropRightWhile(items, (item: unknown): boolean => isEmpty(item) || item === '')
    ?.map((item: any): any => (isEmpty(item) ? 'null' : item))
    ?.join(', ');
}

/**
 * Create arg based on eq, min and max size.
 * @param eq Eq size.
 * @param min Min size.
 * @param max Max size.
 * @returns Sass size arg.
 */
export function createSizeArg(eq: string, min?: string, max?: string): string {
  // Aggregated size arg.
  const aggregated: string[] = [];

  if (eq) aggregated.push(eq);
  if (min) aggregated.push(`min ${min}`);
  if (max) aggregated.push(`max ${max}`);

  // Create sass like size arg.
  return (aggregated.length > 1 ? ['[', aggregated.join(', '), ']'] : aggregated).join('');
}
