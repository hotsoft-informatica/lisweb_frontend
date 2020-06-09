import Component from '@glimmer/component';
import { action } from '@ember/object';
// TODO: Converter para Glimmer
// TODO: Transformar em classe nativa

export default class MarcasIndexComponent extends Component {
  // TODO: Usar decorator @action
  @action
  deleteMarca(marca, event) {
    // TODO:Expected 'this' to be used by class method 'deleteMarca'.
    // TODO: eslintclass-methods-use-this
    marca.destroyRecord();
  }
}
