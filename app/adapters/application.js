import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // TODO: Contruir dinamicamente endereco do backend
  host = 'http://localhost:3010';
}
