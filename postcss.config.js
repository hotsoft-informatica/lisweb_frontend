'use strict';

const { join } = require('path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const postcssImport = require('postcss-import');
const tailwindCSS = require('tailwindcss')('./app/tailwind/config.js');
const postcssPresetEnv = require('postcss-preset-env')({ stage: 1 });

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    join(__dirname, 'app', 'index.html'),
    join(__dirname, 'app', 'templates', '**', '*.hbs'),
    join(__dirname, 'app', 'components', '**', '*.hbs'),
  ],

  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

module.exports = {
  plugins: [
    postcssImport,
    tailwindCSS,
    postcssPresetEnv,
    ...(EmberApp.env() === 'production' ? [purgecss] : []),
  ],
};
