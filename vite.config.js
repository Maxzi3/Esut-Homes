import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-countup"],
  },
  build: {
    outDir: 'dist', // This is the default value
  },
  server: {
    port: 3000,
  },
});
