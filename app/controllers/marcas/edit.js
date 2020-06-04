import Controller from '@ember/controller';

import { action } from '@ember/object';

export default class MarcasEditController extends Controller {
  @action
  redirectTo() {
    this.transitionToRoute("/marcas");
  }
}
