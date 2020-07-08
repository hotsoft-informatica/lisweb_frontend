import Component from '@glimmer/component';
import { action } from '@ember/object';
// TODO: Converter para Glimmer
// TODO: Transformar em classe nativa

export default class GrupoCentroCustosIndexComponent extends Component {
  // TODO: Usar decorator @action
  @action
  delete(grupo_centro_custo) {
    // TODO:Expected 'this' to be used by class method 'delete'.
    // TODO: eslintclass-methods-use-this
    grupo_centro_custo.destroyRecord();
  }
}
