import Route from '@ember/routing/route';
// import CentroCusto from 'lisweb-frontend/models/centro-custo';

export default class Chave_nfseNewRoute extends Route {
  async model() {
    return this.store.createRecord('chave_nfse');
  }
}
