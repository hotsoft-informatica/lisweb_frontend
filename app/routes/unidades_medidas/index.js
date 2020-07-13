import Route from '@ember/routing/route';

export default class UnidadesMedidasIndexRoute extends Route {
  async model() {
    return this.store.query('unidades_medida', {
      limit: 10,
      offset: 0
    });
  }
}
