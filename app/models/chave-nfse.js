import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChaveNfseModel extends Model {
  @attr('string') chave;
  @attr('string') valor;
  // @attr('number') version_id;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
