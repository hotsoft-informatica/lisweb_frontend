import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    marca: this.store.createRecord('marca');
  }
});
