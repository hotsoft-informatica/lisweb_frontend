import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ChaveNfsesEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('chave_nfse', params.chave_nfse_id);
  }
}
