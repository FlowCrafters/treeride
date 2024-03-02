import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  main: {
    root: resolve(__dirname, 'src/app/main'),
    build: {
      lib: {
        entry: resolve(__dirname, 'src/app/main/index.ts'),
      },
    },
    plugins: [externalizeDepsPlugin(), tsconfigPaths({ configNames: ['tsconfig.node.json'] })],
  },
  preload: {
    root: resolve(__dirname, 'src/app/preload'),
    build: {
      lib: {
        entry: resolve(__dirname, 'src/app/preload/index.ts'),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    root: resolve(__dirname, 'src/app/renderer'),
    build: {
      rollupOptions: {
        input: {
          browser: resolve(__dirname, 'src/app/renderer/index.html'),
        },
      },
    },
    plugins: [react(), tsconfigPaths({ configNames: ['tsconfig.web.json'] })],
  },
})

export default config
