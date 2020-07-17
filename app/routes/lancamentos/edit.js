import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class LancamentosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('lancamento', params.lancamento_id);
  }
}
