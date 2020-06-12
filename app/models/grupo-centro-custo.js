import Model, { attr, belongsTo } from '@ember-data/model';

export default class GrupoCentroCusto extends Model {
  @attr('string') nome;
  @belongsTo('laboratorio') laboratorio;
}
