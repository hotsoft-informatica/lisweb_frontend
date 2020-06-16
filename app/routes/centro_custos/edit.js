import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('centro_custos', params.centro_custo_id);
  }
});
