import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default Route.extend({
  model() {
    return this.store.findAll('marca');
  }
});
