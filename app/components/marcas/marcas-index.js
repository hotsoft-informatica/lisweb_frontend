
import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class MarcasIndexComponent extends Component{

  @action
  deleteMarca(marca) {
    marca.destroyRecord();
  }
}
