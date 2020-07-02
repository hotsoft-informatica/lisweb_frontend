import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContaModel extends Model {
  @attr('string') tipo;
  @attr('string') nome;
  @attr('number') saldo;
  @attr('number') version;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
