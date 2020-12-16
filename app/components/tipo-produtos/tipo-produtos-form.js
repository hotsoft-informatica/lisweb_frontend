import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import DefaultComponent from '../default/default';

export default class TipoProdutosFormComponent extends DefaultComponent {
  @service store;
  @tracked redirectTo = '/tipo_produtos';
  @tracked modelString = 'tipo_produto';
  @tracked categoria_produtos = this.store.findAll('categoria_produto');
  @tracked unidade_medidas = this.store.findAll('unidade_medida');
  @tracked modelStrings = A(['categoria_produto', 'unidade_medida']);

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
