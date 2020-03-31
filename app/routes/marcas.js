import Route from '@ember/routing/route';
//import fetch from 'fetch';

export default class MarcasRoute extends Route {

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

    let Lab = this.store.peekRecord('laboratorio', 1);

    let marca = this.store.createRecord('marca', {
      nome: 'TESTE005',
      descricao: 'ESTE É O TESTE CRIACAO DE TESTE005',
      laboratorio: Lab
    });

    marca.save().catch(
      failure
    ).then(
      console.info()
    );

    function myFunction(item) {
      console.table(item);
    }

    function failure(reason) {
      reason.errors.forEach(myFunction);
    }

    return this.store.findAll('marca');
  }
}
