import Model, { attr, belongsTo } from '@ember-data/model';

export default class TipoPessoaModel extends Model {
  @attr('string') nome;
  @attr('string') tipo;
  // @attr('number') version_id;
  // @attr('number') laboratory_domain_id;
  // @attr('boolean') sistema;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
