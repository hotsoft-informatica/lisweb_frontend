import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CentroCustosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('centro_custo', params.centro_custo_id);
  }
}
