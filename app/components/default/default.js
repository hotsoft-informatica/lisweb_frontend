import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { sort } from '@ember/object/computed';

/*
  https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
  https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
  https://api.emberjs.com/ember/release/classes/RouterService
*/
export default class DefaultComponent extends Component {

  @service store;
  @service router;
  // TODO: Tentar carregar do model
  @tracked modelString;
  @tracked sortColumn = '-id';
  @tracked sortDirection;
  @tracked model;
  @tracked errors;
  @tracked page = 1;
  @tracked redirectTo = '/';
  @tracked loading = 'Carregando...';

  constructor(owner, args) {
    super(owner, args);
    this.loadModel();
  }

  // https://www.w3schools.com/js/js_operators.asp
  @action
  sortData(event){
    this.sortColumn = event.target.value;
    // this.sortDirection = direction;
    this.loadModel();
    event.preventDefault();
  }

  @action
  pageUp(){
    this.page += 1;
    this.loadModel();
  }

  @action
  pageDown(){
    this.page -= 1;
    this.loadModel();
  }

  @action
  async loadModel(){
    this.store.query(this.modelString, { page: this.page, sort: this.sortColumn }).then( (model) => {
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

  @action
  save(model, ...event) {
    model.save().then( () => {
      this.router.transitionTo(this.redirectTo);
    });
  }
}
