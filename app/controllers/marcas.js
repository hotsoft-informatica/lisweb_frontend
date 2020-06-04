import Controller from '@glimmer/component';
import { action } from "@ember/object";


export default class MarcasController extends Controller {


  @action
  redirectTo(){
    this.transitionToRoute('/marcas');
  }
}
  
  
  // actions: {

  //   let lab = this. store.findRecord('laboratorio', 1);

  //   saveMarca() {
  //     const nome = this.get('marcaNome');
  //     const descricao = this.get('marcaDescricao');
  //     const laboratorio = lab;

  //     const newMarca = this.store.createRecord('marca', {
  //       nome: nome,
  //       descricao: descricao,
  //       laboratorio: laboratorio 
  //      });
  //      newMarca.save();
  //   }
  // }

