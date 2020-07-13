import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('conta', params.conta_id);
  }
}
