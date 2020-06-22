import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GrupoCentroCustosNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('grupo_centro_custo');
  }
}
