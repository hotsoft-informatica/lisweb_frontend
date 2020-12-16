import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class MarcasFormComponent extends DefaultComponent {
  @tracked modelString = 'marca';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
