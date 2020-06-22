import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CentroCustosIndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('centro_custo');
  }
}
