import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('centro_custo_produtos', params.centro_custo_produto_id);
  }
});
