import Route from '@ember/routing/route';

export default class LaboratoriosEditRoute extends Route {
  model(params) {
    return this.store.findRecord('laboratorio', params.laboratorio_id);
  }
}
