import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class TipoPessoasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_pessoas';
  @tracked modelString = 'tipo_pessoa';

  tipospessoa = ['Administrador', 'Laboratorio', 'Usuario', 'Paciente']
  tipo = 'Selecione'

  @action
  selecTipo (pessoa) {
    this.set('tipo', pessoa);
  }

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }
}
