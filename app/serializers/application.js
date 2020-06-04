import JSONAPISerializer from '@ember-data/serializer/json-api';
import { decamelize } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return decamelize(key);
  }
}
