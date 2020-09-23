import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PessoasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/pessoas';
  @tracked modelString = 'pessoa';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
