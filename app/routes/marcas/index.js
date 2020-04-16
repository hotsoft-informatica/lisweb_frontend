import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
      marcas: this.store.findAll('marca')
    });
  },

  actions: {
    deleteMarca(marca) {
      marca.deleteRecord();
      marca.save().then(() => this.transitionTo('/marcas'));
    }
  }
});
