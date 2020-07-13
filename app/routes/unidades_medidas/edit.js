import Route from '@ember/routing/route';

export default class UnidadesMedidasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('unidades_medida', params.unidades_medida_id);
  }
}
