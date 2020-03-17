import Route from '@ember/routing/route';
//import fetch from 'fetch';

export default class MarcasRoute extends Route {
   // async model() {
  //   const response = await fetch('/localhost:3010.json');
  //   const marcas = await response.json();

  //   return { marcas };
  // }

  model() {
    this.store.findAll('marca');
  }
}
