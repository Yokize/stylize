import { resolve } from 'path';
import { bin, execute } from '../cli/exec';

// Execute the Jest with defined configs.
execute(`${bin('jest')} -c ${resolve(__dirname, 'jest.config.ts')}`);
