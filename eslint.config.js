// @ts-check
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const stylisticEslintPlugin = require('@stylistic/eslint-plugin')
const tsStylisticConfig = stylisticEslintPlugin.configs['recommended-flat']

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      tsStylisticConfig,
      eslintPluginPrettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'nephos',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-class-suffix': ['off'],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'nephos',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/no-extra-semi': ['error'],
      '@stylistic/object-curly-spacing': ['off'],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/comma-dangle': ['off'],
      '@stylistic/quotes': ['off'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/eqeqeq': [
        'error',
        {
          allowNullOrUndefined: true,
        },
      ],
    },
  }
)
