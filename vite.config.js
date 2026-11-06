import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './src/pages/Home.jsx';
import { readFileSync } from 'node:fs';
import { pages, staticFiles, relativePath } from './scripts/site-files.mjs';

// Conserva los recursos usados por scripts clásicos y enlaces de las galerías.
// La lista de directorios es explícita: no publica Informacion, .git ni documentos internos.
function legacyAssets() {
  return {
    name: 'preserve-legacy-assets',
    generateBundle() {
      for (const path of staticFiles) {
        this.emitFile({ type: 'asset', fileName: relativePath(path), source: readFileSync(path) });
      }
    },
  };
}

function renderHome() {
  return {
    name: 'render-home',
    transformIndexHtml(html, { filename }) {
      if (normalizePath(filename) !== normalizePath(pages[0])) return;

      const marker = '<!-- home-root -->';
      if (!html.includes(marker)) throw new Error('Falta la raíz de la portada');
      return html.replace(marker, () => renderToString(createElement(Home)));
    },
  };
}

export default defineConfig({
  base: '/ZairPortafolio/',
  publicDir: false,
  plugins: [react(), renderHome(), legacyAssets()],
  build: {
    rolldownOptions: { input: pages },
  },
});
