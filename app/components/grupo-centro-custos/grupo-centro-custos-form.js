import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

// https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
// https://api.emberjs.com/ember/release/classes/RouterService
export default class GrupoCentroCustosFormComponent extends Component {
  // TODO: 'service' is defined but never used.eslintno-unused-vars
  @service router;
  @tracked redirectTo = '/grupo_centro_custos';
  @tracked model;

  @action
  save(model, ...event) {
    model.save().then( () => {
      this.router.transitionTo(this.redirectTo);
    });
  }
}
