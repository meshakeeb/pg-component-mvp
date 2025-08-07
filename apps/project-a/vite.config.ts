import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mm/pg': resolve(__dirname, '../../packages/pg/src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    // Watch for changes in the packages directory
    watch: {
      ignored: ['!**/packages/**'],
    },
  },
  // Enable dependency optimization for monorepo packages
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@mm/pg'],
  },
})
