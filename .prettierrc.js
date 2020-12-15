'use strict';

module.exports = {
  printWidth: 80,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: "es5",
  arrowParens: "always",
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
