import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/notion-portfolio/',
  plugins: [
    vue(),
    VitePages({
      pagesDir: 'src/pages'
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  },
})