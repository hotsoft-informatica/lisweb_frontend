import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class RequisicaoMateriaisEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('requisicao_marial', params.requisicao_marial_id);
  }
}
