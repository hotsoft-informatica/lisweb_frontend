import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class RequisicaoMateriaisIndexRoute extends Route {
  async model() {
    return this.store.query('requisicao_material', {
      limit: 10,
      offset: 0
    });
  }
}
