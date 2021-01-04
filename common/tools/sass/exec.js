// Utility to locate the module executable, which is installed
// in the `node_modules/.bin` or parent directory.
const which = require('npm-which');

// Implementation of Unix shell commands on top of Node.js, which
// eliminates shell script's dependency on Unix while keeping its
// familiar and powerful commands.
const { exec } = require('shelljs');

// Create an absolute path to the executable module of the command,
// which is installed in the local or global directory.
exports.bin = (name) => which(__dirname).sync(name);

// Run the provided command asynchronously, monitor and inform about
// the progress and outcome of its execution.
exports.exec = (command, callback) => exec(command, { async: true }, callback);
