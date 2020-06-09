import Model, { attr, hasMany } from '@ember-data/model';
// TODO: 'hasMany' is defined but never used.eslintno-unused-vars

export default class LaboratorioModel extends Model {
  @attr('string') nome;
  @hasMany('marca') marcas;
}
