import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('marca', params.marca_id);
  },

  actions: {
    afterSave() {
      this.transitionTo('/marcas');
    }
  }

});
