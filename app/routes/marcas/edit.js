import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MarcasEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('marca', params.marca_id);
  }
}
