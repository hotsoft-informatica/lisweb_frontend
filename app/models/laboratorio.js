import Model, { attr, hasMany } from '@ember-data/model';

export default class LaboratorioModel extends Model {
  @attr('string') nome;
  @hasMany('marca') marcas;
}

