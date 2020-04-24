import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('marca');
  }//,

  // actions: {
  //   saveMarca(newMarca) {
  //     newMarca.save().then(() => this.transitionTo('/marcas'));
  //   }
  // }
});
