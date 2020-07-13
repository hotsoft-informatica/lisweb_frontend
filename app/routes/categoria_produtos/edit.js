import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoriaProdutosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('categoria_produto', params.categoria_produto_id);
  }
}
