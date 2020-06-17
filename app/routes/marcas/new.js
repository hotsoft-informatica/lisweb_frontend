import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class MarcasNewRoute extends Route {
  @service store;

  async model() {
    return this.store.createRecord('marca');
  }
}
