import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

// https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
// https://api.emberjs.com/ember/release/classes/RouterService
export default class MarcasFormComponent extends Component {
  @service router;

  @action
  saveMarca(marca, redirectTo) {
    // TODO: Resolver sem esse selfthis
    let selfthis = this;
    marca.save().then( function() {
      if (!isEmpty(redirectTo)) {
        selfthis.router.transitionTo(redirectTo);
      }
    });
  }
}
