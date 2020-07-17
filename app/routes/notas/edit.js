import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class NotasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('nota', params.nota_id);
  }
}
