import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class UnidadeAtendimentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/unidade_atendimentos';
  @tracked modelString = 'unidade_atendimento';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
