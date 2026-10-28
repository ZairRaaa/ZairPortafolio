import { readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
export const root = resolve(import.meta.dirname, '..');
export function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
export const relativePath = path => relative(root, path).replaceAll('\\', '/');
export const pages = [resolve(root, 'index.html'), ...files(resolve(root, 'pages')).filter(path => path.endsWith('.html'))];
export const staticFiles = [...files(resolve(root, 'assets')), ...files(resolve(root, 'pages'))]
  .filter(path => /\.(css|js|png|webp|jpe?g|svg|ico|pdf|woff2?|mp4)$/i.test(path));
