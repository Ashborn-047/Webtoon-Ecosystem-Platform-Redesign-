import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
  base: '/Webtoon-Ecosystem-Platform-Redesign-/',
  build: {
    cssCodeSplit: false,
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/app.css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})

