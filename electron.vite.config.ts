import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths({ configNames: ['tsconfig.node.json'] })],
    envDir: __dirname,
  },
  preload: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths({ configNames: ['tsconfig.node.json', 'tsconfig.web.json'] })],
  },
  renderer: {
    plugins: [react(), tsconfigPaths({ configNames: ['tsconfig.web.json'] })],
  },
})

export default config
