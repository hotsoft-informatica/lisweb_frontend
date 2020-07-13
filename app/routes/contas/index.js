import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContasIndexRoute extends Route {
  async model() {
    return this.store.findAll('conta');
  }
}
