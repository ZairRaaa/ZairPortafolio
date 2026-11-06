import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import { renderToString } from 'react-dom/server';
import { homeRegions } from './src/entries/home-regions.jsx';
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

function renderHomeRegions() {
  return {
    name: 'render-home-regions',
    transformIndexHtml(html, { filename }) {
      if (normalizePath(filename) !== normalizePath(pages[0])) return;

      for (const [id, content] of Object.entries(homeRegions)) {
        const marker = '<!-- ' + id + ' -->';
        if (!html.includes(marker)) throw new Error('Falta la región de portada ' + id);
        html = html.replace(marker, () => renderToString(content));
      }
      return html;
    },
  };
}

export default defineConfig({
  base: '/ZairPortafolio/',
  publicDir: false,
  plugins: [react(), renderHomeRegions(), legacyAssets()],
  build: {
    rolldownOptions: { input: pages },
  },
});
