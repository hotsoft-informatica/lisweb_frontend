import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class LancamentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/lancamentos';
}
