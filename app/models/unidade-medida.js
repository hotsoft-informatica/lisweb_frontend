import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UnidadeMedidaModel extends Model {
  @attr('string') nome;
  @attr('string') sigla;
  @attr('string') descricao;
  // @attr('number') version_id;
  // @attr('number') laboratory_domain_id;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
  @hasMany('tipo_produto') tipo_produtos;
}
