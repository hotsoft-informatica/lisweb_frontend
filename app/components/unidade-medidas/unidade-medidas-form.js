import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class UnidadeMedidasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/unidade_medidas';
  @tracked modelString = 'unidade_medida';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
