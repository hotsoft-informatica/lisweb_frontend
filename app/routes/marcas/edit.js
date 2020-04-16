import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('marca', params.marca_id);
  },

  actions: {
    saveMarca(newMarca) {
      newMarca.save().then(() => this.transitionTo('/marcas'));
    },

    deleteMarca(newMarca) {
      newMarca.destroyRecord();
      newMarca.save().then(() => this.transitionTo('/marcas'));
    }
  }
});
