import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8081,
  },
  plugins: [react(), tailwindcss()].filter(Boolean),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1600
  },
  optimizeDeps: {
    include: ["react-hook-form"],
  }
  
});
