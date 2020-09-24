import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class OrcamentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/orcamentos';
  @tracked modelString = 'orcamento';

  @action
  save(model, ...event){
    super.save(model, ...event);
  }
}
