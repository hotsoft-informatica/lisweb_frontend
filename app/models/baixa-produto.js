import Model, { attr, belongsTo } from '@ember-data/model';

export default class BaixaProdutoModel extends Model {
  @attr('string') observacoes;
  @attr('string') classificacao;
  @attr('number') numero;
  @attr('string') tipo_movimento;
  // @attr('date') data_movimentacao;
  // @attr('number') version_id;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
