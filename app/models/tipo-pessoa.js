import Model, { attr, belongsTo } from '@ember-data/model';

export default class TipoPessoa extends Model {
  @attr('string') tipo;
  @attr('string') nome;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('boolean') sistema;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
