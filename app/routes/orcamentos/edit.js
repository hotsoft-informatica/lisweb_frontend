import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class OrcamentosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('orcamento', params.orcamento_id);
  }
}
