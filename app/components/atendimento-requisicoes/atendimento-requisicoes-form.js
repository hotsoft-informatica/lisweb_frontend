import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class AtendimentoRequisicoesFormComponent extends DefaultComponent {
  @tracked redirectTo = '/atendimento_requisicoes';
}
