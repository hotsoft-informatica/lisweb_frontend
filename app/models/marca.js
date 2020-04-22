import Model, { attr, belongsTo } from '@ember-data/model';

export default class MarcaModel extends Model {
  @attr('string') nome;
  @attr('string') descricao;
  @belongsTo('laboratorio') laboratorio;
}
