/**
 * Describes code warnings that contains the line
 * number and the message describing the problem.
 */
export interface CodeWarning {
  line: number;
  message: string;
}

/**
 * Describes the code fragment that contains language,
 * content in corresponding syntax, errors and warnings.
 */
export interface CodeFragment {
  lang: string;
  code?: string;
  meta?: string;
  error?: string;
  warnings?: CodeWarning[];
}
