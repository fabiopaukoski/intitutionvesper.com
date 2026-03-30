import fs from 'node:fs';
import path from 'node:path';

const base = new URL('..', import.meta.url);
const files = ['index.html', 'styles.css', 'data.js', 'utils.js', 'auth.js', 'app.js'];

for (const file of files) {
  const full = new URL(file, base);
  if (!fs.existsSync(full)) {
    throw new Error(`Arquivo ausente: ${file}`);
  }
}

const index = fs.readFileSync(new URL('index.html', base), 'utf8');
if (!index.includes('<script src="./data.js"></script>') || !index.includes('<script src="./app.js"></script>')) {
  throw new Error('index.html não referencia os scripts esperados.');
}

const data = fs.readFileSync(new URL('data.js', base), 'utf8');
if (!data.includes('global.SanguinisData')) {
  throw new Error('data.js não expõe SanguinisData globalmente.');
}
if (!data.includes('REGISTRO DE INCIDENTE LUX-02')) {
  throw new Error('data.js parece incompleto.');
}

const auth = fs.readFileSync(new URL('auth.js', base), 'utf8');
if (!auth.includes('tryLogin') || !auth.includes('tryAdminUnlock')) {
  throw new Error('auth.js não contém as funções esperadas.');
}

const utils = fs.readFileSync(new URL('utils.js', base), 'utf8');
if (!utils.includes('extractNotes') || !utils.includes('escapeHtml')) {
  throw new Error('utils.js não contém as funções esperadas.');
}

const app = fs.readFileSync(new URL('app.js', base), 'utf8');
if (!app.includes('renderLogin') || !app.includes('renderArchive') || !app.includes('render();')) {
  throw new Error('app.js não contém o fluxo principal esperado.');
}

console.log('Smoke tests passaram.');
