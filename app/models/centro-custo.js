import Model, { attr, belongsTo } from '@ember-data/model';

export default class CentroCusto extends Model {
  @attr('string') nome;
  @attr('number') version;
  @attr('boolean') pode_solicitar_tudo;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
