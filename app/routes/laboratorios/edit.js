import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LaboratoriosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('laboratorio', params.laboratorio_id);
  }
}
