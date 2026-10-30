import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relativní cesta zajistí, že se assety načtou správně v podadresáři GitHub Pages
  base: './',
});
