import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class PedidoModel extends Model {
  @attr('string') status;
  // @attr('date') data_prevista;
  @attr('string') observacao;
  // @attr('date') data_pedido;
  // @attr('string') numero_pedido_fornecedor;
  // @attr('number') version_id;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
  // @belongsTo('pessoa') pessoa_id;
}
