import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PedidosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/pedidos';
}
