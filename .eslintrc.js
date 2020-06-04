'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'disable-features',
    'ember',
    'ember-internal',
    'qunit'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
    'plugin:qunit/recommended',
    'prettier'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    "array-bracket-spacing": [ 2, "always" ],
    "camelcase": [ 1 ],
    "class-methods-use-this": [ 1 ],
    "computed-property-spacing": [ 2, "always" ],
    "no-case-declarations": [ 1 ],
    "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
    "no-param-reassign": [ 1 ],
    "no-return-assign": [ 1 ],
    "no-shadow": [ 1 ],
    "no-undef": [ 1 ],
    "no-underscore-dangle" : [0, "always"],
    "no-use-before-define": [ 2, { "functions": false } ],
    "object-curly-spacing": [ 2, "always" ],
    "prefer-const": 1,
    'prettier/prettier': "error",
    "quotes": [ 1, "single", "avoid-escape" ],
    "semi": [0, "never"],
    "space-in-parens": [ 0, "always" ],
    "template-curly-spacing": [ 2, "always" ],
    'disable-features/disable-async-await': 'error',
    'disable-features/disable-generator-functions': 'error',
    'ember/no-jquery': 'error',
    'no-console': 'off',
    'no-implicit-coercion': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef': [ 1 ],
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prettier': true,
    'prettier/prettier': true,
    'qunit/no-commented-tests': 'off',
    'qunit/require-expect': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    }
  ]
};

