import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

/*
  https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
  https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
  https://api.emberjs.com/ember/release/classes/RouterService
*/
export default class DefaultComponent extends Component {
  @service store;
  @tracked model;
  @tracked errors;
  @service router;
  @tracked redirectTo = '/';
  @tracked loading='Carregando...';

/*
  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('marca').then( (marcas) => {
      this.model = marcas;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }
*/

  @action
  delete(model) {
    model.destroyRecord();
  }

  @action
  save(model, ...event) {
    model.save().then( () => {
      this.router.transitionTo(this.redirectTo);
    });
  }
}
