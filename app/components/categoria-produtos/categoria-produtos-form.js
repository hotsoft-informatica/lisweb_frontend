import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class CategoriaProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/categoria_produtos';
}
