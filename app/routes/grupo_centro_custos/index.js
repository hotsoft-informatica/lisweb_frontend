import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('grupo_centro_custos');
  }
});
