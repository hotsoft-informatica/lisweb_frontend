import DefaultComponent from '../default/default';

export default class ChaveNfsesIndexComponent extends DefaultComponent {
  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('chave_nfse').then( (model) => {
      this.model = model;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }
}
