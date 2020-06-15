'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      sourceMaps: 'inline'
    },

    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: 'eslint-rules',
      extensions: [ 'js' ]
    },

    'ember-cli-qunit': {
      useLintTree: false
    },

    'ember-cli-mocha': {
      useLintTree: false
    },

    hinting: true
  });

  // TODO: Alinhar com o Acras para remover, pois depende do jQuery
  // TODO: Remover dependencias do jQuery
  app.import('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js');
  // TODO: Nao esta sendo usado, remover
  // app.import('node_modules/simple-line-icons/css/simple-line-icons.css');

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
