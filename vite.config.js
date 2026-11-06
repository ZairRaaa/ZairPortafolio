import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Header } from './src/components/layout/Header.jsx';
import { Footer } from './src/components/layout/Footer.jsx';
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

function renderHomeLayout() {
  return {
    name: 'render-home-layout',
    transformIndexHtml(html, { filename }) {
      if (normalizePath(filename) !== normalizePath(pages[0])) return;

      const header = renderToString(createElement(Header));
      const footer = renderToString(createElement(Footer));
      return html
        .replace('<div id="home-header-root"></div>', () => '<div id="home-header-root">' + header + '</div>')
        .replace('<div id="home-footer-root"></div>', () => '<div id="home-footer-root">' + footer + '</div>');
    },
  };
}

export default defineConfig({
  base: '/ZairPortafolio/',
  publicDir: false,
  plugins: [react(), renderHomeLayout(), legacyAssets()],
  build: {
    rolldownOptions: { input: pages },
  },
});
