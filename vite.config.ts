import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    compress: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // CONSERVATIVE: Keep what's working for desktop
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Light optimization - won't hurt desktop performance
        pure_funcs: ['console.log'],
      },
    },
    rollupOptions: {
      output: {
        // CONSERVATIVE: Keep current chunking strategy that works for desktop
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react'],
          helmet: ['react-helmet'],
        },
      },
    },
    // KEEP CURRENT SETTINGS: Don't change what's working for desktop
    sourcemap: false,
    chunkSizeWarningLimit: 500, // Keep current setting
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Keep current setting
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet'],
  },
  esbuild: {
    treeShaking: true,
    target: 'es2020',
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  }
}));