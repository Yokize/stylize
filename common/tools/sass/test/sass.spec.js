// Match files using the patterns the shell uses.
const { sync } = require('glob');

// Utilities for working with file and directory paths, which vary
// depending on the operating system where Node.js is running.
const { resolve } = require('path');

// True is a unit-testing tool for Sass code. All of the tests are
// written in plain Sass, and can be used with JavaScript test runners.
const { runSass } = require('sass-true');

// Current working directory.
const cwd = process.cwd();

// Importer to resolve libraries.
const importer = (path) => ({
  file: path[0] === '~' ? resolve(cwd, 'node_modules', path.substr(1)) : path
});

// Find Sass spec files and run SassTrue.
sync(resolve(cwd, '**/*.spec.sass'), { ignore: '**/node_modules/**' }).forEach((file) =>
  runSass({ file, importer }, { describe, it })
);
