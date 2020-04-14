import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return Ember.RSVP.hash({
      laboratorios: this.store.findAll('laboratorio')
    });
  },
  
  actions: {
    saveMarca(newMarca, laboratorioId) {
      var marca = this.store.createRecord('marca', {
        nome: newMarca.nome,
        descricao: newMarca.descricao,
        laboratorio_id: laboratorioId
      });

     marca.save().then(() => this.transitionToRoute('marcas'));
    },
  }
});


