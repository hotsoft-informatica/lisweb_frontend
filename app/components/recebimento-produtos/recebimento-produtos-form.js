import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class RecebimentoProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/recebimento_produtos';
}
