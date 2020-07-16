import Inflector from 'ember-inflector';

// # TODO: Fazer teste para os inflections
export function initialize() {

  const inflector = Inflector.inflector;

  inflector.pluralize('conta');
  inflector.plural(/$/, 's');
  inflector.singular(/s$/i, '');

}

export default {
  name: 'custom-inflector-rules',
  initialize
};
