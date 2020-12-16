'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  plugins: [
    'disable-features',
    'ember-internal',
    'ember-suave',
    'ember',
    'qunit',
  ],

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:ember-suave/recommended',
    'plugin:ember/recommended',
    'plugin:qunit/recommended',
    'prettier',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    'class-methods-use-this': [0, 'never'],
    'lines-between-class-members': [
      1,
      'always',
      { exceptAfterSingleLine: true },
    ],

    'array-bracket-spacing': [0, 'always'],
    'arrow-parens': ['error', 'always'],
    camelcase: [0],
    'computed-property-spacing': [2, 'always'],
    'disable-features/disable-async-await': [0, 'always'],
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
    'generator-star-spacing': ['error', { before: false, after: true }],
    'new-cap': ['error', { capIsNewExceptions: ['A'] }],
    'no-case-declarations': [1],
    'no-implicit-coercion': 'error',
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-new-wrappers': 'error',
    'no-param-reassign': [1],
    'no-return-assign': [1],
    'no-shadow': [1],
    'no-throw-literal': 'error',
    'no-undef': [1],
    'no-underscore-dangle': [0, 'always'],
    'no-unused-vars': [0, 'always'],
    'no-use-before-define': [2, { functions: false }],
    'no-var': 'error',
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 0,
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: [1, 'single', 'avoid-escape'],
    semi: [0, 'never'],
    'comma-dangle': [0, 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'space-before-function-paren': [0, 'always'],
    'space-in-parens': [0, 'always'],
    'template-curly-spacing': [2, 'always'],
    'import/no-unresolved': [
      'error',
      { ignore: ['^@ember', 'htmlbars-inline-precompile'] },
    ],
    'ember-suave/lines-between-object-properties': [0, 'always'],
    'func-names': [0, 'always'],
  },

  settings: {
    'import/resolver': 'eslint-import-resolver-ember',
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
        '.prettierrc.js',
        'stylelint.config.js',
        'commitlint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'app/tailwind/config.js',
        'husky.config.js',
        'lint-staged.config.js',
        '.template-lintrc.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'ember-cli-build.js',
        'lib/*/index.js',
        'server/**/*.js',
        'testem.js'
      ],

      parserOptions: {
        sourceType: 'script',
      },

      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: {
        // eslint-disable-next-line global-require
        ...require('eslint-plugin-node').configs.recommended.rules,
        // add your custom rules and overrides for node files here
        strict: ['error', 'global'],

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};

