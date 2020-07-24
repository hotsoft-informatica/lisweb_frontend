import Model, { attr, belongsTo } from '@ember-data/model';

export default class AtendimentoRequisicoesModel extends Model {
  @attr('number') numero;
  @attr('string') descricao;
  @attr('number') user_id;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
