import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UnidadeMedidasNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('unidade_medida');
  }
}
