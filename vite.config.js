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
      threshold: 5120, // Compress files larger than 5 KB
      compressionOptions: {
        level: 11, // Max compression level for Brotli
      },
      deleteOriginFile: false, // Keep uncompressed files
      filter: /\.(js|css|html|svg|json|wasm|woff2?)$/,
    }),
  ],
  build: {
    sourcemap: true,
    minify: 'terser',
    target: 'esnext', // Modern output for better optimization
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    cssCodeSplit: true, // Split CSS for better caching
  },
  server: {
    cors: true,   // Allow cross-origin requests
    compression: true, // Ensure compression is enabled
  },
});
