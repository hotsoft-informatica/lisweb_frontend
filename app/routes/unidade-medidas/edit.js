import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UnidadeMedidasEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('unidade_medida', params.unidade_medida_id);
  }
}
