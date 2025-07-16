import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': '/src', // Optional: Add a default alias for cleaner imports
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react';
            if (id.includes('chart.js')) return 'chart';
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase chunk size limit if needed
  },
  server: {
    port: 3000, // Change this to your desired port
  },
});
