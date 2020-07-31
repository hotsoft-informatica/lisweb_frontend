import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TipoPessoasIndexRoute extends Route {
  async model() {
    return this.store.query('tipo_pessoa', {
      limit: 10,
      offset: 0
    });
  }
}
