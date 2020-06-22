import Route from '@ember/routing/route';

export default class ContasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('conta', params.conta_id);
  }
}
