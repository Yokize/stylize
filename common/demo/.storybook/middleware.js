const { resolve } = require('path');
const tsConfig = require('../tsconfig.json');

// TypeScript support at runtime.
require('ts-node').register({
  project: resolve(__dirname, '../tsconfig.json')
});

// TypeScript paths support at runtime.
require('tsconfig-paths').register({
  baseUrl: '.',
  paths: tsConfig.compilerOptions.paths
});

// Export middleware function to configure app.
module.exports = require('../server/app');
