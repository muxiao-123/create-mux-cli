import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginRegexp from 'eslint-plugin-regexp'
export default defineConfig(
  {
    ignores: ['node_modules', 'dist', 'create-vite', 'create-vue', 'test', 'docs', 'template']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  eslintPluginRegexp.configs['flat/recommended']
)
