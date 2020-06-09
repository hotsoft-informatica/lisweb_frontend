import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class MarcaModel extends Model {
  @attr('string') nome;
  @attr('string') descricao;
  @belongsTo('laboratorio') laboratorio;
}
