import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CentroCustosEditRoute extends Route {
  @service store;

  async model(params) {
    // TODO: Revisar
    return this.store.findRecord('conta', params.conta_id);
  }
}

