import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoriaProdutosNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('categoria_produto');
  }
}
