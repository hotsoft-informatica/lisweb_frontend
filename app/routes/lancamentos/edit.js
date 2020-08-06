import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LancamentosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('lacamento', params.lacamento_id);
  }
}
