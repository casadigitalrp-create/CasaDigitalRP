import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'dist');

const files = [
  'index.html',
  'sobre.html',
  'servicos.html',
  'portfolio.html',
  'contato.html',
  'robots.txt',
  'sitemap.xml',
  'assets/css/site.css',
  'assets/js/site.js',
  'assets/js/contact.js',
  'assets/img/logo/logo-principal.png'
];

await rm(output, { recursive: true, force: true });

for (const relativePath of files) {
  const destination = join(output, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await cp(join(root, relativePath), destination);
}

console.log(`Site pronto para publicação em ${output} (${files.length} arquivos).`);
