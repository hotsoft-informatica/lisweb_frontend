import Route from '@ember/routing/route';

export default class TiposProdutosEditRoute extends Route {
  model(params) {
    return this.store.findRecord('tipo_produto', params.tipo_produto_id);
  }
}
