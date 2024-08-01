import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-countup"],
  },
  build: {
    rollupOptions: {
      external: ["react-countup"],
    },
  },
  server: {
    port: 3000,
  },
});
