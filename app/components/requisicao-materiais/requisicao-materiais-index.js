import DefaultComponent from '../default/default';

export default class RequisicaoMateriaisIndexComponent extends DefaultComponent {
  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('requisicao_material').then( (model) => {
      this.model = model;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }
}
