import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Use fileURLToPath para obter o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
// Use dirname para obter o diretório atual
const __dirname = dirname(__filename);

const child = spawn('node', ['src/appmain.js'], {
  cwd: __dirname,
  stdio: 'inherit',
});

child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});

child.on('error', (err) => {
  console.error(`Error starting child process: ${err}`);
});
