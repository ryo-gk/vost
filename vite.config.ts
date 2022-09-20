import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteMdData from 'vite-plugin-md-data'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    viteMdData({
      path: './posts'
    })
  ]
})
