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
     newMarca.save().then(() => this.transitionTo('marcas'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

//this.get('newUser').save().then((user) =>
    //  this.transitionToRoute('users', user.get('id'))
    //);
