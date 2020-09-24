import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class AtendimentoRequisicoesFormComponent extends DefaultComponent {
  @tracked redirectTo = '/atendimento_requisicoes';
  @tracked modelString = 'atendimento_requisicao';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
