import Model, { attr, belongsTo } from '@ember-data/model';

export default class MarcaModel extends Model {
  @attr('string') nome;
  @attr('string') descricao;
  // @attr('number') laboratorio_id;
  @belongsTo('laboratorio') laboratorio;
}
