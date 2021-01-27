import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';
import { Changeset } from 'ember-changeset';

export default class TipoPessoasFormComponent extends DefaultComponent {
  @tracked redirectTo = '/tipo_pessoas';
  @tracked modelString = 'tipo_pessoa';

  tipospessoa = ['Administrador', 'Laboratorio', 'Usuario', 'Paciente']
  tipo = 'Selecione'

  init(...args) {
    super.init(...args)

    //let validator = this.validate;
    this.changeset = Changeset(this.tipospessoa);
  }
  // @action
  // selecTipo (pessoa) {
  //   this.set('tipo', pessoa);
  // }

  @action
  save(model, ...event) {
    super.save(model, ...event);
  }

  @action
  submit(changeset) {
    return changeset.save();
  }

  @action
  rollback(changeset) {
    return changeset.rollback();
  }

  // @action
  // validate({ key, newValue, oldValue, changes, content }) {
  //   // lookup a validator function on your favorite validation library
  //   // and return a Boolean
  // }
}
