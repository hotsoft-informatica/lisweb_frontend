import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import validatePresence from 'ember-changeset-validations/validators/presence';

export default class CentroCustosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/centro_custos';
  @tracked modelString = 'centro_custo';

  myFormModel = {
    name: {
      first: 'Ron',
      last: 'Swanson'
    },
    email: 'ron@pawnee.in.gov',
    hometown: 'Pawnee, IN',
    preferences: ['Lagavulin', 'Steak', 'Bacon', 'No govt.']
  };

  validations = {
    myValue: validatePresence(true)
  };

  myModel = {
    myValue: ''
  };

  myChangeset = new Changeset(
    this.myModel,
    lookupValidator(this.validations),
    this.validations
  );

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
