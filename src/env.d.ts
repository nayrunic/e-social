/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly DATABASE_PW: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }