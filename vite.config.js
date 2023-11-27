import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@configs': path.resolve(__dirname, 'src/configs'),
    }
  }
})