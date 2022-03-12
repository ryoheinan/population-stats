import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: { charset: false },
      scss: { charset: false },
    },
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
