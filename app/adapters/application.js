import JSONAPIAdapter from '@ember-data/adapter/json-api';

// https://api.emberjs.com/ember-data/release/classes/RESTAdapter
export default class ApplicationAdapter extends JSONAPIAdapter {
  // TODO: Contruir dinamicamente endereco do backend
  // TODO: Autenticacao
  // TODO: Login
  host = 'http://localhost:3010';
}
