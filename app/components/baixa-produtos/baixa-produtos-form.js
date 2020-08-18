import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class BaixaProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/baixa_produtos';
}
