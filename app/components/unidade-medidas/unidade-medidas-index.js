import DefaultComponent from '../default/default';

export default class UnidadeMedidasIndexComponent extends DefaultComponent {
  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('unidade_medida').then( (model) => {
      this.model = model;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }
}
