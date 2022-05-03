import which from 'npm-which';
import { exec } from 'shelljs';

// Create an absolute path to the executable module of the command,
// which is installed in the local or global directory.
export function bin(name: string): string {
  return which(__dirname).sync(name);
}

// Run the provided command asynchronously, monitor and inform about
// the progress and outcome of its execution.
export function execute(command: string): void {
  exec(command, { async: true });
}
