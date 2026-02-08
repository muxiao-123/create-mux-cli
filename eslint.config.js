import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginRegexp from 'eslint-plugin-regexp'
export default defineConfig(
  {
    ignores: ['node_modules', 'dist', 'test', 'docs', 'template', 'mux-cli/dist', 'mux-cli/template', '.cz-config.cjs']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  eslintPluginRegexp.configs['flat/recommended']
)
