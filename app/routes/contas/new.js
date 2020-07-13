import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import CentroCusto from 'lisweb-frontend/models/centro-custo';

export default class ContasNewRoute extends Route {
  async model() {
    return this.store.createRecord('conta');
  }
}
