import Route from '@ember/routing/route'
import { inject as service } from '@ember/service';

export default class PedidosNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('pedido')
  }
}
