import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(),sitemap({
    baseURL: 'https://yangyangmed.com',
    sitemapFilename: 'sitemap.xml',
    pretty: true,
    exclude: ['/404']
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
