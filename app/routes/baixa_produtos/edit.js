import Route from '@ember/routing/route';

export default class BaixaProdutosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('baixa_produto', params.baixa_produto_id);
  }
}
