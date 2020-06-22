import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from '../app';
import config from '../config/environment';
/* TODO: Relative imports from parent directories are not allowed.
 Please either pass what you're importing through at runtime (dependency injection),
 move `test-helper.js` to same directory as `../config/environment` or consider
  making `../config/environment` a package.eslintimport/no-relative-parent-imports
*/

setApplication(Application.create(config.APP));

start();
