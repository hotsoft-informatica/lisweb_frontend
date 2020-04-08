import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('marca');
  },

  actions: {

    saveMarca(newMarca) {
      newMarca.save().then(() => this.transitionTo('marcas'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
