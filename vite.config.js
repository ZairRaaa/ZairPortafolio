import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
export default defineConfig({
  base: '/ZairPortafolio/',
  publicDir: false,
  plugins: [react(), legacyAssets()],
  build: {
    rolldownOptions: { input: pages },
  },
});
