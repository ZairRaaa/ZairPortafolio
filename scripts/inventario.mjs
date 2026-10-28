import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';
import { pages, staticFiles, relativePath } from './site-files.mjs';
export function nodes(node) { return [node, ...(node.childNodes || []).flatMap(nodes)]; }
const inventory = {
  reference: '8e8092f',
  pages: pages.map(path => {
    const html = readFileSync(path, 'utf8');
    const tree = nodes(parse(html));
    const attrs = tree.flatMap(node => node.attrs || []);
    return {
      path: relativePath(path),
      sha256: createHash('sha256').update(html).digest('hex'),
      ids: attrs.filter(a => a.name === 'id').map(a => a.value),
      links: attrs.filter(a => ['src', 'href'].includes(a.name)).map(a => a.value),
    };
  }),
  resources: staticFiles.map(relativePath),
};
writeFileSync('docs/migracion/inventario.json', JSON.stringify(inventory, null, 2) + '\n');
console.log(`${inventory.pages.length} páginas y ${inventory.resources.length} recursos inventariados.`);
