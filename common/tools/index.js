const { resolve } = require('path');

// Runtime support of the TypeScript.
// https://www.npmjs.com/package/ts-node
require('ts-node').register({
  project: resolve(__dirname, 'tsconfig.json')
});

// Run command line interface and execute script.
require('./cli');
