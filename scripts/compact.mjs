import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const command = process.platform === 'win32' ? 'wsl.exe' : 'compact';
const commandArgs = process.platform === 'win32' ? ['--', 'compact', ...args] : args;
const result = spawnSync(command, commandArgs, { stdio: 'inherit', shell: false });

if (result.error) {
  if (process.platform === 'win32') {
    console.error('Compact is not a native Windows command. Install the official Compact devtools in WSL, then rerun this command.');
  }
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
