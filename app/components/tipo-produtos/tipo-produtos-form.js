import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_produtos';
  @tracked modelString = 'tipo_produto';
  @tracked modelString = 'categoria_produto';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
