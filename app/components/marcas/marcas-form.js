import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
// https://api.emberjs.com/ember/release/classes/RouterService
export default class MarcasFormComponent extends Component {
  // TODO: 'service' is defined but never used.eslintno-unused-vars
  @service router;

  @action
  saveMarca(marca, event, redirectTo = '/marcas') {
    // TODO: Resolver sem esse selfthis
    let selfthis = this;
    marca.save().then(function () {
      selfthis.router.transitionTo(redirectTo);
    });
  }
}
