
import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class MarcasFormComponent extends Component{
  @service router;

  @action
  saveMarca(marca,redirectTo) {
    self = this;
    marca.save().then( function(){
      if (!isEmpty(redirectTo)){
      // https://api.emberjs.com/ember/release/classes/RouterService
      self.router.transitionTo(redirectTo);
    }});
  }
}

