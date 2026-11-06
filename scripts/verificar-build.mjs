import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, dirname, sep } from 'node:path';
import { parse } from 'parse5';
import { root, pages, staticFiles, relativePath, files } from './site-files.mjs';
const dist = resolve(root, 'dist');
const base = '/ZairPortafolio/';
const errors = [];
function walk(node) { return [node, ...(node.childNodes || []).flatMap(walk)]; }
for (const path of [...pages, ...staticFiles]) {
  if (!existsSync(resolve(dist, relativePath(path)))) errors.push(`Falta ${relativePath(path)}`);
}
for (const source of pages) {
  const page = resolve(dist, relativePath(source));
  if (!existsSync(page)) continue;
  const tree = walk(parse(readFileSync(page, 'utf8')));
  if (source === pages[0]) {
    const home = tree.find(node => node.attrs?.some(attr => attr.name === 'id' && attr.value === 'home-root'));
    for (const tag of ['header', 'main', 'footer']) {
      if (!home?.childNodes.some(node => node.tagName === tag)) errors.push('Falta ' + tag + ' en la raíz de la portada');
    }
  }
  for (const node of tree) {
    for (const attr of node.attrs || []) {
      if (!['src', 'href'].includes(attr.name) || !attr.value || /^(?:[a-z]+:|\/\/|#)/i.test(attr.value)) continue;
      const url = new URL(attr.value, `https://test.local${base}${relativePath(source)}`);
      const pathname = decodeURIComponent(url.pathname);
      if (!pathname.startsWith(base)) { errors.push(`Ruta fuera del prefijo: ${attr.value}`); continue; }
      let target = resolve(dist, pathname.slice(base.length));
      if (pathname.endsWith('/')) target = resolve(target, 'index.html');
      if (!existsSync(target)) errors.push(`${relativePath(source)} -> ${attr.value}`);
    }
  }
}
// Verifica también los recursos que las hojas de estilo solicitan.
for (const css of files(dist).filter(p => p.endsWith('.css'))) {
  const text = readFileSync(css, 'utf8');
  for (const match of text.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)) {
    const url = match[1];
    if (/^(?:[a-z]+:|\/\/|#)/i.test(url)) continue;
    const target = url.startsWith(base) ? resolve(dist, decodeURIComponent(url.slice(base.length))) : resolve(dirname(css), decodeURIComponent(url.split(/[?#]/)[0]));
    if (!existsSync(target)) errors.push(`${relative(dist, css)} -> ${url}`);
  }
}
for (const path of files(dist)) {
  if (relative(dist, path).split(sep).some(p => ['Informacion', '.git', 'node_modules', 'docs'].includes(p))) errors.push(`Archivo interno publicado: ${path}`);
}
if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exitCode = 1; }
else console.log(`Build verificado: ${pages.length} páginas, ${staticFiles.length} recursos y enlaces bajo ${base}`);
