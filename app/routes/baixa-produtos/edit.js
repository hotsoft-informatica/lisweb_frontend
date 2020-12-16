import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BaixaProdutosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('baixa_produto', params.baixa_produto_id);
  }
}
