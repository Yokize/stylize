/**
 * Describes the complexity of the `size` argument,
 * which can contain minimum, maximum and equal values.
 */
export interface Size {
  size?: string;
  minSize?: string;
  maxSize?: string;
}

/**
 * Describes the complexity of the `width` argument,
 * which can contain minimum, maximum and equal values.
 */
export interface Width {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

/**
 * Describes the complexity of the `height` argument,
 * which can contain minimum, maximum and equal values.
 */
export interface Height {
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}
