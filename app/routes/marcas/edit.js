import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class MarcasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('marca', params.marca_id);
  }
}
