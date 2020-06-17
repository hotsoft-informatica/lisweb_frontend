import Route from '@ember/routing/route';

export default class TipoProdutosNewRoute extends Route {
  async model() {
    return this.store.createRecord('tipo_produto');
  }
}
