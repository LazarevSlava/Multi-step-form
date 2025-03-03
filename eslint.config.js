import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  configPrettier,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
