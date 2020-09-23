import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class ChaveNfsesFormComponent extends DefaultComponent {
  @tracked redirectTo = '/chave_nfses';
  @tracked modelString = 'chave_nfse';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
