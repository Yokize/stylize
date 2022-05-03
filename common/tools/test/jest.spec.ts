import { resolve } from 'path';
import { runSass } from 'sass-true';
import { sync as globFind } from 'glob';

// Current working directory.
const cwd: string = process.cwd();

// Path to the external libraries.
const libs: string = resolve(cwd, 'node_modules');

// Wildcard pattern to find the test specs.
const specs: string = resolve(cwd, '**/*.spec.sass');

// Wildcard pattern to the files which ignore.
const ignore: string = '**/node_modules/**';

// Find the Sass spec files and run SassTrue with jest.
globFind(specs, { ignore }).forEach((file: string): void => {
  runSass({ file, importer }, { describe, it });
});

// Sass importer to resolve the external libraries by path.
function importer(path: string): Record<string, string> {
  return { file: path.at(0) === '~' ? resolve(libs, path.slice(1)) : path };
}
