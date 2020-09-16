import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class MarcasIndexComponent extends DefaultComponent {
  @tracked modelString = 'marca';
  // @tracked laboratorioString = 'laboratorio';
}
