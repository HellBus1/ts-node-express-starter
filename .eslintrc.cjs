module.exports = {
  root: true,
  env: {
    browser: true, 
    es2020: true,
    "jest/globals": true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
  },
  overrides: [
    {
      'files': ['**/*.test.ts'],
      'rules': {
        'max-lines-per-function': 'off'
      }
    }
  ],
  globals: {
    describe: true,
    it: true,
    true: true
  }
}
