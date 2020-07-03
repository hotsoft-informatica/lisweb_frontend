import Model, { attr, belongsTo } from '@ember-data/model';

export default class GrupoParametrosNfseModel extends Model {
  @attr('string') nome;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @attr('number') changed_by_lab_id;
  @belongsTo('laboratorio') laboratorio_id;
}
