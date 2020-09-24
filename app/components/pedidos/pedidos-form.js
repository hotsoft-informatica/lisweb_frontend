import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PedidosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/pedidos';
  @tracked modelString = 'pedido';

  @action
  save(model, ...event){
    super.save(model, ...event);
  }
}
