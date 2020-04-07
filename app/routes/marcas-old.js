import Route from '@ember/routing/route';
//import fetch from 'fetch';

export default class MarcasRoute extends Route {

  // model() {
  //   // https://guides.emberjs.com/release/models/relationships/
  //   // https://emberigniter.com/saving-models-relationships-json-api/

  //   // let lab = this. store.findRecord('laboratorio', 1);

  //   // let marca = this.store.createRecord('marca', {
  //   //   nome: 'TESTE006',
  //   //   descricao: 'ESTE É O TESTE CRIACAO DE TESTE006',
  //   //   laboratorio: lab
  //   // });

  //   // marca.save();

  //   // function myFunction(item) {
  //   //   console.table(item);
  //   // }

  //   // function failure(reason) {
  //   //   reason.errors.forEach(myFunction);
  //   // }

  //   // return this.store.findAll('marca');

  // }

  model(params) {
    return this.store.findAll('marca');
  }
}
