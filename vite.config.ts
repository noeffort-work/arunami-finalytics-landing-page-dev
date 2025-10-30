import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const page = (name: string) => resolve(__dirname, `${name}.html`)

export default defineConfig({
  root: resolve(__dirname),
  server: {
    port: 5500,
    open: false,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: page('index'),
        activation: page('activation'),
        registration: page('registration'),
      },
    },
  },
})
