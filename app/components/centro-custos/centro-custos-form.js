import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class CentroCustosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/centro_custos';
  @tracked modelString = 'centro_custo';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
