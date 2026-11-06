import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './src/pages/Home.jsx';
import { NotebookIndex } from './src/pages/NotebookIndex.jsx';
import { WeekSix } from './src/pages/weeks/WeekSix.jsx';
import { WeekEight } from './src/pages/weeks/WeekEight.jsx';
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

const reactPages = {
  'index.html': { rootId: 'home-root', Component: Home },
  'pages/cuaderno/index.html': { rootId: 'notebook-root', Component: NotebookIndex },
  'pages/cuaderno/semana-06/index.html': { rootId: 'week-root', Component: WeekSix },
  'pages/cuaderno/semana-08/index.html': { rootId: 'week-root', Component: WeekEight },
};

function renderReactPages() {
  return {
    name: 'render-react-pages',
    transformIndexHtml(html, { filename }) {
      const page = reactPages[relativePath(filename)];
      if (!page) return;

      const marker = '<!-- ' + page.rootId + ' -->';
      if (!html.includes(marker)) throw new Error('Falta la raíz de ' + relativePath(filename));
      return html.replace(marker, () => renderToString(createElement(page.Component)));
    },
  };
}

export default defineConfig({
  base: '/ZairPortafolio/',
  publicDir: false,
  plugins: [react(), renderReactPages(), legacyAssets()],
  build: {
    rolldownOptions: { input: pages },
  },
});
