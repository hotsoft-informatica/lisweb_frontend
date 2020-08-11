import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class RequisicaoMateriaisFormComponent extends DefaultComponent {
  @tracked redirectTo = '/requisicao_materiais';
}
