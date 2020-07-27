import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_produtos';
}
