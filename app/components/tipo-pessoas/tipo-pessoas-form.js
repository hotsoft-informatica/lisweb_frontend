import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoPessoasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_pessoas';
}
