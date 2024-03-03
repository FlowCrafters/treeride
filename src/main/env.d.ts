/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_NO_MAIN_WINDOW_BLUR_HIDE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
