import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TipoProdutosIndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('tipo_produto');
  }
}
