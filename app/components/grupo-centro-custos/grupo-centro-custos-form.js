import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

// https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
// https://api.emberjs.com/ember/release/classes/RouterService
export default class GrupoCentroCustosFormComponent extends DefaultComponent {
  // TODO: 'service' is defined but never used.eslintno-unused-vars
  @tracked redirectTo = '/grupo_centro_custos';
  @tracked modelString = 'grupo_centro_custo';

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
