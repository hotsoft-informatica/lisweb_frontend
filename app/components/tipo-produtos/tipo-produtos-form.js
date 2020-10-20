import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_produtos';
  @tracked modelString = 'tipo_produto';

  @tracked modelStrings = A(['categoria_produto', 'unidade_medida']);

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
