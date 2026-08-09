import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    hmr: true, // Hot Module Replacement for instant reloads
  },
  build: {
    target: 'esnext',       // Use latest JS — smallest output
    minify: 'esbuild',      // Fastest minifier
    cssCodeSplit: true,     // Split CSS per chunk for faster page loads
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
