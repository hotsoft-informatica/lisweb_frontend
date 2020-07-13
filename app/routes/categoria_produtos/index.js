import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoriaProdutosIndexRoute extends Route {
  async model() {
    return this.store.query('categoria_produto', {
      limit: 10,
      offset: 0
    });
  }
}
