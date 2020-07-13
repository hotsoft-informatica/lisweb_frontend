import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TipoPessoasNewRoute extends Route {
  async model() {
    return this.store.createRecord('tipo_pessoa');
  }
}
