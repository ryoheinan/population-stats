/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
