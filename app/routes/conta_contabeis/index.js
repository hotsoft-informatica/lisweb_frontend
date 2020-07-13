import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContaContabeisIndexRoute extends Route {
  async model() {
    return this.store.findAll('conta_contabil');
  }
}
