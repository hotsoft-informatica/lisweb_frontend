'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const gitRev = require('git-rev-sync');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
  let disabledAddons = [];
  let environment = EmberApp.env();
  let isProduction = environment === 'production';

  let swDisabled = process.env.SW_DISABLED;
  let version = gitRev.short();

  console.info('\n---------------');
  console.info('environment: ', environment);
  console.info('isProduction: ', isProduction);
  console.info('SW_DISABLED: ', swDisabled);
  console.info('git version: ', version);
  console.info('---------------\n');

  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
    babel: {
      sourceMaps: 'inline',
    },
    sourcemaps: {
      enabled: !isProduction,
      extensions: 'js',
    },
    babel: {
      sourceMaps: 'inline',
    },
    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: 'eslint-rules',
      extensions: ['js', 'ts'],
    },
    'ember-cli-qunit': {
      useLintTree: false,
    },
    'ember-ci-mocha': {
      useLintTree: false,
    },
    hinting: true,
    minifyJS: { enabled: isProduction },
    minifyCSS: { enabled: isProduction },
    outputPaths: {
      app: {
        html: 'index.html',
      },
    },
    autoImport: {
      alias: {
        qrcode: 'qrcode/build/qrcode.min.js',
        'qr-scanner': 'qr-scanner/qr-scanner.min.js',
        uuid: 'uuid/index.js',
      },
      exclude: ['libsodium', 'libsodium-wrappers'],
    },
    'ember-cli-babel': {
      includePolyfill: true,
      disablePresetEnv: true,
      disableDebugTooling: false,
      includeExternalHelpers: true,
      // disableDebugTooling: isProduction,
      // Will not build if uncommented:
      // disableEmberModulesAPIPolyfill: true
      // compileModules: false,
    },
    addons: { blacklist: disabledAddons },
    'asset-cache': {
      version,
      include: ['assets/**/*', '**/*.html', 'index.html'],
      exclude: ['.well-known/**/*', 'bundle.html', 'favicon.ico', 'robots.txt'],
    },
    'esw-index': {
      version,
      excludeScope: [
        /\.well-known/,
        /bundle.html/,
        /favicon.ico/,
        /robots.txt/,
      ],
    },
    sassOptions: {
      extensions: ['js', 'scss'],
    },
    'ember-cli-qunit': {
      useLintTree: false,
    },
    'ember-cli-mocha': {
      useLintTree: false,
    },
    hinting: true,
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
