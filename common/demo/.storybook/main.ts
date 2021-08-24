import { resolve } from 'path';
import TsConfigPaths from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

// General build configs.
export const core: unknown = {
  builder: 'webpack5'
};

// Addons to be turned on.
export const addons: unknown[] = [
  {
    name: '@storybook/addon-essentials',
    options: {
      actions: false
    }
  }
];

// Patterns for finding stories.
export const stories: string[] = [
  // Storybook Docs.
  '../**/*.stories.mdx',
  '../**/*.stories.ts'
];

// Loader to handle initial indent.
const deIndent: string = resolve('./loader/deindent.ts');

// Extend default webpack configs.
export async function webpackFinal(config: Configuration): Promise<Configuration> {
  addPugRule(config);
  addSassRule(config);

  config.resolve.plugins = [
    // Reuse other resolve plugins.
    ...(config.resolve.plugins || []),
    // Add plugin to resolve tsconfig paths.
    new TsConfigPaths()
  ];

  // Returns changed webpack configuration.
  return config;
}

// Add Pug loader to webpack rules.
function addPugRule(config: Configuration): void {
  config.module.rules.push({
    test: /\.pug$/,
    use: ['pug-plain-loader', deIndent]
  });
}

// Add Sass loader to webpack rules.
function addSassRule(config: Configuration): void {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader', deIndent]
  });
}
