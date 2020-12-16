import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TipoProdutosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('tipo_produto', params.tipo_produto_id);
  }
}
