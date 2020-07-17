import Component from '@glimmer/component';
import { action } from '@ember/object';
// TODO: Converter para Glimmer
// TODO: Transformar em classe nativa

export default class TipoProdutosIndexComponent extends Component {
  // TODO: Usar decorator @action
  @action
  delete(tipo_produto) {
    // TODO:Expected 'this' to be used by class method 'delete_tipo_produto'.
    // TODO: eslintclass-methods-use-this
    tipo_produto.destroyRecord();
  }
}
