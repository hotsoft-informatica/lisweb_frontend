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
    'ember-suave',
    'qunit'
  ],

  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:ember-suave/recommended',
    'plugin:qunit/recommended'
  ],

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {
    'class-methods-use-this': [ 0, 'never' ],
    'lines-between-class-members': [ 1, 'always', { 'exceptAfterSingleLine': true } ],
    'array-bracket-spacing': [ 2, 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'camelcase': [ 1 ],
    'class-methods-use-this': [ 1 ],
    'computed-property-spacing': [ 2, 'always' ],
    'disable-features/disable-async-await': 'error',
    'disable-features/disable-generator-functions': 'error',
    'ember-suave/no-const-outside-module-scope': 'error',
    'ember-suave/no-direct-property-access': 'error',
    'ember-suave/require-access-in-comments': 'error',
    'ember/classic-decorator-hooks': 'error',
    'ember/classic-decorator-no-classic-methods': 'error',
    'ember/no-actions-hash': 'error',
    'ember/no-classic-classes': 'error',
    'ember/no-classic-components': 'error',
    'ember/no-component-lifecycle-hooks': 'error',
    'ember/no-computed-properties-in-native-classes': 'error',
    'ember/no-jquery': 'error',
    'ember/require-tagless-components': 'error',
    'generator-star-spacing': [ 'error', { 'before': false, 'after': true } ],
    'new-cap': [ 'error', { 'capIsNewExceptions': [ 'A' ] } ],
    'no-case-declarations': [ 1 ],
    'no-implicit-coercion': 'error',
    'no-multiple-empty-lines': [ 2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 } ],
    'no-new-wrappers': 'error',
    'no-param-reassign': [ 1 ],
    'no-return-assign': [ 1 ],
    'no-shadow': [ 1 ],
    'no-throw-literal': 'error',
    'no-undef': [ 1 ],
    'no-underscore-dangle': [ 0, 'always' ],
    'no-unused-vars': 'error',
    'no-use-before-define': [ 2, { 'functions': false } ],
    'no-var': 'error',
    'object-curly-spacing': [ 2, 'always' ],
    'object-shorthand': [ 'error', 'always' ],
    'prefer-const': 0,
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': [ 1, 'single', 'avoid-escape' ],
    'semi': [ 0, 'never' ],
    'space-in-parens': [ 0, 'always' ],
    'template-curly-spacing': [ 2, 'always' ]
  },

  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'ember-cli-build.js',
        'lib/*/index.js',
        'server/**/*.js',
        'testem.js'
      ],

      parserOptions: {
        sourceType: 'script'
      },

      env: {
        browser: false,
        node: true
      },

      plugins: [ 'node' ],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    }
  ]
};
