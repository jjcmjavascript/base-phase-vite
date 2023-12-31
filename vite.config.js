import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@cards': path.resolve(__dirname, 'src/assets/cards'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@classes': path.resolve(__dirname, 'src/classes'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
