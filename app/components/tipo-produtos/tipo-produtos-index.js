import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoProdutosIndexComponent extends DefaultComponent {
  @tracked modelString = 'tipo_produto';
  @tracked includeString = 'categoria-produto,unidade-medida';
}
