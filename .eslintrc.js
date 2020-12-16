/* eslint-env node */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: [],
  extends: [],
  rules: {
    'no-shadow': ['error'],
  },
};
