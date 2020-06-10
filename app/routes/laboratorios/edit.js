import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('laboratorio', params.laboratorio_id);
  }
});
