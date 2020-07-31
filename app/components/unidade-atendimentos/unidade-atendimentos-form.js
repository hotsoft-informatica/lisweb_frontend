import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class UnidadeAtendimentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/unidade_atendimentos';
}
