import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class UnidadeMedidasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/unidade_medidas';
}
