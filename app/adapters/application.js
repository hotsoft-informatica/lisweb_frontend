import JSONAPIAdapter from '@ember-data/adapter/json-api';

// https://api.emberjs.com/ember-data/release/classes/RESTAdapter
export default class ApplicationAdapter extends JSONAPIAdapter {
  /* Pendencias
  - TODO: Contruir dinamicamente endereco do backend
  - TODO: Autenticacao
  - TODO: Login
  - TODO: Paginacao
  - TODO: Ordenacao
  - TODO: Busca */
  host = 'http://localhost:3010';
}
