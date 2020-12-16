import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

/* TODO: Relative imports from parent directories are not allowed.
  Please either pass what you're importing through at runtime (dependency injection),
  move `app.js` to same directory as `./config/environment` or
  consider making `./config/environment` a package.eslintimport/no-relative-parent-imports */

export default class App extends Application {
  modulePrefix = config.modulePrefix;

  podModulePrefix = config.podModulePrefix;

  Resolver = Resolver;
  LOG_TRANSITIONS = true;

  LOG_TRANSITIONS_INTERNAL = true;

  LOG_RESOLVER = true;

  RAISE_ON_DEPRECATION = true;

  LOG_STACKTRACE_ON_DEPRECATION = true;
}

loadInitializers(App, config.modulePrefix);

