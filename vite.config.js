import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlMinifier from 'vite-plugin-html-minifier';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    htmlMinifier({
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',         
      threshold: 10240,   
      deleteOriginFile: false,    
    }),  
  ],
  build: {
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      external: [
        // List any external dependencies here if needed
      ],
    },
  },
  server: {
    compression: true, // Enable Brotli or Gzip compression
  },
});