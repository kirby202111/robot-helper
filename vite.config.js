import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {ElectronDevPlugin} from './plugins/vite.electron.dev'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElectronDevPlugin(),
    vueDevTools(),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
