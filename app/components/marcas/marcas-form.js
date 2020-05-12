
import Component from '@glimmer/component';
import { action } from "@ember/object";
//import {inject as service} from '@ember/service';
//import { redirectTo } from '@ember/utils';
//import { isEmpty } from '@ember/utils';


export default class MarcasFormComponent extends Component{
  //@service router;

  @action
  saveMarca(marca, redirectTo) {
    //marca.save().then(( ) => this.controller.send('afterSave', marca));
    marca.save().then(( ) => this.controller.send(redirectTo));
  }
  
  // this.attrs.showDetailsAction(this.get('activity'));

  // saveMarca(marca,redirectTo) {
  //   marca.save().then( )
  //     if (!isEmpty(redirectTo)){
  //     // https://api.emberjs.com/ember/release/classes/RouterService
  //     this.router.transitionTo(redirectTo);
  //   }
  // }
}
