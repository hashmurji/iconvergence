import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    outDir: 'dist',
  },
})
