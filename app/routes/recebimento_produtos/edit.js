import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class RecebimentoProdutosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('recebimento_produto', params.recebimento_produto_id);
  }
}
