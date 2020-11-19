const glob = require('glob');
const path = require('path');
const sassTrue = require('sass-true');

// Find Sass files by glob pattern. Need to use resolve because
// SassTrue requires absolute paths to compile test files.
const sassTestFiles = glob.sync(path.resolve(process.cwd(), '**/*.spec.scss'));

// Create custom importer to resolve external libraries.
const importer = (url) => ({ file: url[0] === '~' ? path.resolve(__dirname, 'node_modules', url.substr(1)) : url });

// Run SassTrue on every file found with the describe and it methods provided.
sassTestFiles.forEach((file) => sassTrue.runSass({ file, importer }, { describe, it }));
