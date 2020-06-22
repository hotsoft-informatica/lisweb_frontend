import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

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
