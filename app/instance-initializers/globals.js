export function initialize(application) {
  let { environment } = application.resolveRegistration('config:environment')
  window.App = application;
  window.App.store = application.__container__.lookup('service:store');
  window.App.service = function(name) {
    return application.lookup(`service:${ name }`)
  }

  let objects = [
    'service',
    'controller',
    'route',
    'model'
  ];
  objects.forEach((type) => {
    window.App[ type ] = function(name) {
      return application.lookup(`${ type }:${ name }`)
    }
  })
  class CurrentContext {
    get model() {
      return application.lookup(
        `controller:${ application.lookup('service:router').currentRouteName }`
      ).model;
    };

    get controller() {
      return application.lookup(
        `controller:${ application.lookup('service:router').currentRouteName }`
      );
    };

    get route() {
      return application.lookup(
        `route:${ application.lookup('service:router').currentRouteName }`
      );
    };
  }
  window.App.ctx = new CurrentContext();
  return environment;
}

export default {
  name: 'globals',
  initialize
};
