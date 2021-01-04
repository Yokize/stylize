const glob = require('glob');
const path = require('path');
const sassTrue = require('sass-true');

// Find Sass files by glob pattern.
const sassTestFiles = glob.sync(path.resolve(process.cwd(), '**/*.spec.scss'), { ignore: '**/node_modules/**' });

// Create importer to resolve external libraries.
const importer = (url) => ({ file: url[0] === '~' ? path.resolve(process.cwd(), 'node_modules', url.substr(1)) : url });

// Run SassTrue on every file found with the describe and it methods.
sassTestFiles.forEach((file) => sassTrue.runSass({ file, importer }, { describe, it }));
