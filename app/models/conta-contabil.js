import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContaContabilModel extends Model {
  @attr('string') tipo;
  @attr('string') nome;
  @attr('string') codigo;
  @attr('string') status;
  @attr('number') version;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('number') conta_contabil_pai_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
