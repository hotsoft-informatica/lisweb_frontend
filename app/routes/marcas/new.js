import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return Ember.RSVP.hash({
      marca: this.store.createRecord('marca'),
      laboratorios: this.store.findAll('laboratorio')
    });
  },

  actions: {
    saveMarca(newMarca) {
      newMarca.save().then(() => this.transitionTo('/marcas'));
    }
  }
});
