import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PedidosIndexComponent extends DefaultComponent {
  @tracked modelString = 'pedido';
}
