import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // phaser doesn't accept inlined assets
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: [splitVendorChunkPlugin()],
      output: {
        manualChunks: {
          phaser: ['phaser'],
        },
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      },
    },
  }
})
