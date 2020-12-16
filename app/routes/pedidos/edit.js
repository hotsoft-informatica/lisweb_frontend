import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PedidosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('pedido', params.pedido_id);
  }
}
