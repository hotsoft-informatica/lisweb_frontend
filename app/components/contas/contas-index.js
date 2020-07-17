import Component from '@glimmer/component';
import { action } from '@ember/object';
// TODO: Converter para Glimmer
// TODO: Transformar em classe nativa

export default class ContasIndexComponent extends Component {
  // TODO: Usar decorator @action
  @action
  delete(conta) {
    // TODO:Expected 'this' to be used by class method 'delete'.
    // TODO: eslintclass-methods-use-this
    conta.destroyRecord();
  }
}
