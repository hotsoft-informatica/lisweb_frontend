import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class CentroCustosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/centro_custos';
}
