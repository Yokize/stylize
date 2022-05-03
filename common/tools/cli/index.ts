import { resolve } from 'path';
import { test, echo } from 'shelljs';

// The `process.argv` returns an array containing the command line
// arguments passed when the Node.js process was launched.
const [, , name]: string[] = process.argv;

// Create an absolute path to the root file of the script based on
// the name, which specified in the process arguments.
const script: string = resolve(__dirname, '..', name, 'index.ts');

// Verify the existence of a script that can be executed by Node.js
// and is part of the current node package.
test('-f', script)
  ? // Execute the script via Node.js module system.
    import(script)
  : // Inform the developer that there is no such script.
    echo('Please specify the correct script name');
