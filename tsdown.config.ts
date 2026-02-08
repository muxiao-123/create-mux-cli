import { defineConfig } from 'tsdown'
import { fileURLToPath } from 'url'
export default defineConfig(() => {
  return {
    entry: 'src/index.ts',
    // outDir: 'dist',
    target: 'node20',
    minify: false,
    inlineOnly: false as const,
    fixedExtension: false,
    plugins: [],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})
