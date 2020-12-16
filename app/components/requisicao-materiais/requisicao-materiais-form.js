import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequisicaoMateriaisFormComponent extends Component {
  @service router;
  @tracked redirectTo = '/requisicao_materiais';

  @action
  save(model, ...event) {
    model.save().then(() => {
      this.router.transitionTo(this.redirectTo);
    });
  }
}
