import Route from '@ember/routing/route';

export default class LaboratoriosNewRoute extends Route {
  async model() {
    return this.store.createRecord('laboratorio');
  }
}
