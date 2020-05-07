
import Component from '@glimmer/component';
import { action } from "@ember/object";
import {inject as service} from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class MarcasFormComponent extends Component{
  @service router;

  @action
  saveMarca(marca,redirectTo) {
    marca.save();
    // Por dentro do then
    if (!isEmpty(redirectTo)){
      // https://api.emberjs.com/ember/release/classes/RouterService
      this.router.transitionTo(redirectTo);
    }
  }
}
