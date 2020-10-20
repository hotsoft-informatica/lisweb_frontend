import { debug } from  '@ember/debug';
import { A } from '@ember/array';
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
  // TODO: Montar array dinamico atraves do model
  //  Hoje suprido por always_include_linkage_data

  // @tracked store = this.store;
  @tracked includeString;
  @tracked modelString;
  @tracked modelStrings = A();
  @tracked sortColumn = '-id';
  @tracked sortDirection;
  @tracked model;
  @tracked models = {};
  @tracked errors;
  @tracked page = 1;
  @tracked redirectTo = '/';
  @tracked loading = 'Carregando...';
  @tracked selectedOption;
  
  constructor(owner, args) {
    super(owner, args);
    this.loadModels();
  }
  
  @action
  async loadModel(modelString){
    console.error(modelString);
    this.store.query(modelString, { page: this.page, include: this.includeString, sort: this.sortColumn }).then( (model) => {
      this.models[ modelString ] = model;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
    
  }

  @action
  loadModels(){
    this.loadModel(this.modelString);
    this.model = this.models[ this.modelString ];
    this.modelStrings.forEach((modelString) => {
      this.loadModel(modelString);
    });
  }

  // https://www.w3schools.com/js/js_operators.asp
  @action
  sortData(event){
    this.sortColumn = event.target.value;
    // this.sortDirection = direction;
    this.loadModels();
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
  delete(model) {
    model.destroyRecord();
  }

  @action
  save(model, ...event) {
    this.store.findRecord('laboratorio', 2).then( (laboratorio) => {
      model.set('laboratorio', laboratorio);
      model.save().then( () => {
        this.router.transitionTo(this.redirectTo);
      });
    });
  }

  @action
  setSelection(selectedOption, ...event) {
    this.selectedOption[ selectedOption ] = event.target.value;
    // console.log(this.get('selectedOptionCatProduto'));
    // console.log(this.get('selectedOptionUndMedida'));
  }

}
