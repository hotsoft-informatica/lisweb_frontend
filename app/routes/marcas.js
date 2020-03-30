import Route from '@ember/routing/route';
//import fetch from 'fetch';

export default class MarcasRoute extends Route {
   // async model() {
  //   const response = await fetch('/localhost:3010.json');
  //   const marcas = await response.json();

  //   return { marcas };
  // }

  // model() {
  //   return this.store.createRecord('marca', {
  //     "nome": "TESTE001",
  //     "descricao": "ESTE É O TESTE CRIACAO DE TESTE001",
  //     "laboratorio_id": '02',
  //     "version_id": '007',
  //     "deleted": false
  //   }).save().then(() => {
  //       return this.store.findAll('marca');
  //   });
  // }

  model() {
    // https://guides.emberjs.com/release/models/relationships/
    // https://emberigniter.com/saving-models-relationships-json-api/

    let marca = this.store.createRecord('marca', {
      "nome": "TESTE001",
      "descricao": "ESTE É O TESTE CRIACAO DE TESTE001",
      laboratorio: this.store.findRecord('laboratorio', 1)
    });

    function myFunction(item) {
      console.table(item);
    }

    function failure(reason) {
      reason.errors.forEach(myFunction);
    }

    marca.save().catch(
      failure
    ).then(
      console.info()
    );

    // this.store.push(marca);
    return this.store.findAll('marca');
  }

  // model() {
  //   return this.store.findAll('marca');
  // }
}
