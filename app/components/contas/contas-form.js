import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class ContasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/contas';
  @tracked modelString = 'conta';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
