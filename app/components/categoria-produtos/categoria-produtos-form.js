import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class CategoriaProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/categoria_produtos';
  @tracked modelString = 'categoria_produto';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
