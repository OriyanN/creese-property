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
      algorithm: 'brotliCompress', // Use Brotli compression
      ext: '.br', // File extension for Brotli-compressed files
      threshold: 10240, // Only compress files larger than 10 KB
      deleteOriginFile: false, // Keep the original uncompressed files
    }),
  ],
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        unused: true,
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    }    
  },
  server: {
    host: '0.0.0.0', // Ensure the server is accessible externally
    port: 5173, // Explicitly set the port
  },
}); 