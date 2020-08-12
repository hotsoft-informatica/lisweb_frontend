import Inflector from 'ember-inflector';

// # TODO: Fazer teste para os inflections
export function initialize() {

  const { inflector } = Inflector;

  inflector.plural(/$/, 's');
  inflector.singular(/s$/i, '');
  inflector.pluralize('conta');
  inflector.irregular('contabil', 'contabeis');
  inflector.irregular('material', 'materiais');
  inflector.irregular('requisicao', 'requisicoes');

}

export default {
  name: 'custom-inflector-rules',
  initialize
};
