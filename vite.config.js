import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    sitemap({
      base: 'https://yangyangmed.com',
      filename: 'sitemap.xml',
      hostname: 'https://yangyangmed.com',
      routes: [
        {
          path: '/',
          lastMod: new Date(),
          priority: 1.0,
          changefreq: 'daily'
        },
        {
          path: '/index',
          lastMod: new Date(),
          priority: 0.8,
          changefreq: 'daily'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
