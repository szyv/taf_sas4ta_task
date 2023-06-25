module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:playwright/playwright-test',
    'eslint:recommended',
    'plugin:playwright/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module'
  // },
  rules: {
    // quotes: ['error', 'backtick'],
    semi: ['error', 'always']
  },
  parserOptions: {
    "sourceType": "module",
  }
};
