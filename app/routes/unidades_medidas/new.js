import Route from '@ember/routing/route';

export default class UnidadesMedidasNewRoute extends Route {
  async model() {
    return this.store.createRecord('unidades_medida');
  }
}
