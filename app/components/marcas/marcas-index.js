import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class MarcasIndexComponent extends Component {
  @service store;
  @tracked errors;
  @tracked loading='Carregando...';
  @tracked model;

  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('marca').then( (model) => {
      this.model = model;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }

  @action
  delete(model) {
    model.destroyRecord();
  }
}
