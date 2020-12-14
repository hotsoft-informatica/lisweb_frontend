'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    quotes: 'single',
    'no-inline-styles': false,
    'no-implicit-this': true,
    'no-bare-strings': {
      whitelist: [
        '(',
        ')',
        ',',
        '.',
        '&',
        '+',
        '-',
        '=',
        '*',
        '/',
        '#',
        '%',
        '!',
        '?',
        ':',
        '[',
        ']',
        '{',
        '}',
        '<',
        '>',
        '•',
        '—',
        ' ',
        '|',
        '@',
      ],
    },
    'no-invalid-interactive': {
      additionalInteractiveTags: ['a'],
    },
    'attribute-indentation': false,
  },
};

