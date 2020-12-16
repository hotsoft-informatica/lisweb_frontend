import DefaultComponent from '../default/default';

export default class MarcasIndexComponent extends DefaultComponent {
  constructor(owner, args) {
    super(owner, args);
    this.store.findAll('marca').then( (marcas) => {
      this.model = marcas;
    }, (errors) => {
      this.loading = 'Falha no carregamento!';
      this.errors = errors;
    });
  }
}

