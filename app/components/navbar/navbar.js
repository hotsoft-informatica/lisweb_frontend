
import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class NavbarComponent extends Component{
  @service router;
}
