import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrcamentosEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('orcamento', params.orcamento_id);
  }
}
