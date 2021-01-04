// Utilities to create and execute commands.
const { bin, exec } = require('../exec');

// Execute the command to generate documentation.
exec(`${bin('sassdoc')} **/index.scss`);
