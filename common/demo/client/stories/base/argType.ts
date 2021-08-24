import type { ArgType } from '@storybook/addons';

/**
 * Create default base arg type.
 * @param type Arg type.
 * @returns Arg Type.
 */
function createArgType(type: string): ArgType {
  return { control: { type } };
}

// Arg type color.
export const color: ArgType = createArgType('color');

// Arg type string.
export const string: ArgType = createArgType('text');

// Arg type number.
export const number: ArgType = createArgType('number');
