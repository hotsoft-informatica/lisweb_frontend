import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class CategoriaProdutosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('categoria_produto', params.categoria_produto_id);
  }
}
