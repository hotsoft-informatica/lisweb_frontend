import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('marca');
  },
  //https://guides.emberjs.com/v1.12.0/components/sending-actions-from-components-to-your-application/
  actions: {
    redirectTo: function() {
      this.transitionTo("marcas");
    }
  }
});
