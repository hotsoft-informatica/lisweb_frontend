import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContaContabeisEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('conta_contabil', params.conta_contabil_id);
  }
}
