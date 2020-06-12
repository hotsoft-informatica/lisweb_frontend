import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('centro_custo_produtos');
  }
});
