// The `process.argv` returns an array containing the command line
// arguments passed when the Node.js process was launched.
const [, , name] = process.argv;

// Utilities for working with file and directory paths, which vary
// depending on the operating system where Node.js is running.
const { resolve } = require('path');

// Implementation of Unix shell commands on top of Node.js, which
// eliminates shell script's dependency on Unix while keeping its
// familiar and powerful commands.
const { test, echo } = require('shelljs');

// Create an absolute path to the root file of the script based on
// the name, which specified in the process arguments.
const script = resolve(__dirname, name, 'index.js');

// Verify the existence of a script that can be executed by Node.js
// and is part of the current node package.
test('-f', script)
  ? // Execute the script via Node.js module system.
    require(script)
  : // Inform the developer that there is no such script.
    echo('Please specify the correct script name');
