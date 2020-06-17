import Route from '@ember/routing/route';

export default class TipoProdutosNewRoute extends Route {
  model() {
    return this.store.createRecord('tipo_produto');
  }
}
