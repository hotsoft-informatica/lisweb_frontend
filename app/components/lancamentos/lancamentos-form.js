import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class LancamentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/lancamentos';
  @tracked modelString = 'lancamento';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
