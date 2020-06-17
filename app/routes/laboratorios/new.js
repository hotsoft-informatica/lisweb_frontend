import Route from '@ember/routing/route';

export default class LaboratoriosNewRoute extends Route {
  model() {
    return this.store.createRecord('laboratorio');
  }
}
