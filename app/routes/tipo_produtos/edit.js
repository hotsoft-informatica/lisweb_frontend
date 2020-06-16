import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('tipo_produto', params.tipo_produto_id);
  }
});
