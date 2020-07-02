import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class RecebimentoProdutoModel extends Model {
  @attr('string') numero_nf;
  @attr('date') data_hora_recebimento;
  @attr('string') observacao;
  @attr('date') data_pedido;
  @attr('number') changed_by_lab_id;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio_id;
  @belongsTo('pessoa') pessoa_id;
}
