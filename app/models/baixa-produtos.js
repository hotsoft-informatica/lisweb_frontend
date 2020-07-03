import Model, { attr, belongsTo } from '@ember-data/model';

export default class BaixaProdutosModel extends Model {
  @attr('string') cobservacoes;
  @attr('string') classificacao;
  @attr('number') numero;
  @attr('string') tipo_movimento;
  @attr('date') data_movimentacao;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio_id;
}
