import Route from '@ember/routing/route';

export default class TipoProdutosIndexRoute extends Route {
  model() {
    return this.store.findAll('tipo_produto');
  }
}
