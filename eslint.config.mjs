import { ESLint } from 'eslint';
import prettier from 'eslint-plugin-prettier';

/** @type {ESLint.ConfigData} */
const config = {
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    globals: {
      // Define your global variables here, e.g., `window`, `document` for browser environment
      window: 'readonly',
      document: 'readonly',
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};

export default config;
