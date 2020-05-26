import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('marca');
  },
  actions: {
    redirectTo: function(){
      console.log("Passou aqui");
      this.router.transitionTo(redirectTo);
    }
  }
});
