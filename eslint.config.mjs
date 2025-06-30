import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import("eslint").Linter.FlatConfigItem[]} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierPluginRecommended,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          usePrettierrc: true
        }
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/react-in-jsx-scope': 'off'
    }
  },
  // 👇 Este bloque desactiva la regla solo para next.config.js
  {
    files: ['next.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]

export default eslintConfig
