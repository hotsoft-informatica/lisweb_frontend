import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MarcasNewController extends Controller {
  @action
  redirectTo() {
    console.log("passou controlllllllllleeeeeeerrrrr");
    this.transitionToRoute("/marcas");
  }
}
