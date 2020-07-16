import Model, { attr, belongsTo } from '@ember-data/model';

export default class GrupoCentroCustoModel extends Model {
  @attr('string') nome;
  // @attr('boolean') deleted;
  // @attr('number') changed_by_lab_id;
  @belongsTo('laboratorio') laboratorio;
}
