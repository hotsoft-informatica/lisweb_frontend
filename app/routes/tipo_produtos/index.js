import Route from '@ember/routing/route';

export default class TipoProdutosIndexRoute extends Route {
  async model() {
    return this.store.findAll('tipo_produto');
  }
}
