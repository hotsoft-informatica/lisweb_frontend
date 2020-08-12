import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class OrcamentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/orcamentos';
}
