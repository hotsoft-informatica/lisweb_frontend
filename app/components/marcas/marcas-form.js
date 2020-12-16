import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class MarcasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/marcas';
}

