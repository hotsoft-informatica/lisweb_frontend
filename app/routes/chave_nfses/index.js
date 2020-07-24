import Route from '@ember/routing/route';

export default class ChaveNfsesIndexRoute extends Route {
  async model() {
    return this.store.findAll('chave_nfse');
  }
}
