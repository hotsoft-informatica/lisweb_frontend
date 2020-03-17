import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends JSONAPIAdapter {
// export default class ApplicationAdapter extends RESTAdapter {
  //lab
  host = 'http://localhost:3010';
  //namespace = '/';
}
