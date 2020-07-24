import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class RequisicaoMateriaisNewRoute extends Route {
  async model() {
    return this.store.createRecord('requisicao_material');
  }
}
