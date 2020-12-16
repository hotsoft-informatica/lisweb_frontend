import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class RecebimentoProdutosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/recebimento_produtos';
  @tracked modelString = 'recebimento_produto';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
