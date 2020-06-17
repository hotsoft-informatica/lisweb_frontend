import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class MarcasIndexRoute extends Route {
  model() {
    return this.store.query('marca', {
      limit: 10,
      offset: 0
    });
  }
}
