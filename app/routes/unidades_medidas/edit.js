import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class UnidadesMedidasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('unidades_medida', params.unidades_medida_id);
  }
}
