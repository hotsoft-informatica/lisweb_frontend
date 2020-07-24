import Route from '@ember/routing/route';

export default class BaixaProdutosIndexRoute extends Route {
  async model() {
    return this.store.findAll('baixa_produto');
  }
}
