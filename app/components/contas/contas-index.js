import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class ContasIndexComponent extends DefaultComponent {
  @tracked modelString = 'conta';
}
