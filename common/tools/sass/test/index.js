// Utilities for working with file and directory paths,
// which vary depending on the operating system where
// Node.js is running.
const { resolve } = require('path');

// Utilities to create and execute commands.
const { bin, exec } = require('../exec');

// Execute the Jest with the specified configuration.
exec(`${bin('jest')} -c ${resolve(__dirname, 'jest.config.js')}`);
