import Route from '@ember/routing/route';

export default class ChaveNfsesEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('chave_nfse', params.chave_nfse_id);
  }
}
