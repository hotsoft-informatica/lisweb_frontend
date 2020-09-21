import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class ContaContabeisFormComponent extends DefaultComponent {
  @tracked redirectTo = '/conta_contabeis';
  @tracked modelString = 'conta_contabil';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
