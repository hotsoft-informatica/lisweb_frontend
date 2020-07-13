import Route from '@ember/routing/route'
import { inject as service } from '@ember/service';

export default class MarcasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('marca', params.marca_id);
  }
}
