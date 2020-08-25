import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PessoasIndexComponent extends DefaultComponent {
  @tracked modelString = 'pessoa';
}
