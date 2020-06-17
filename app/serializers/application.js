import JSONAPISerializer from '@ember-data/serializer/json-api';
import { decamelize } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {
  // TODO: Validar se essa customizacao eh necessaria
  // TODO: Linter esta reclamando da sintaxe
  // TODO: Expected 'this' to be used by class method 'keyForAttribute'.
  // TODO: eslintclass-methods-use-this
  /* keyForAttribute(key) {
    return decamelize(key);
  } */
}
