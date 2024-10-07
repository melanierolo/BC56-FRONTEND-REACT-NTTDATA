import globals from 'globals';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts'], // Only target .ts files
    languageOptions: {
      globals: globals.browser,
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-console': 'warn',
      'no-var': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      eqeqeq: 'error',
      indent: ['error', 2],
      ...tsEslintPlugin.configs.recommended.rules,
    },
    ignores: [
      'node_modules/**',
      'dist/**',
      'package.json',
      'package-lock.json',
    ],
  },
];
