import Model, { attr, belongsTo } from '@ember-data/model';

export default class CategoriaProdutoModel extends Model {
  @attr('string') nome;
  @attr('string') descricao;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
