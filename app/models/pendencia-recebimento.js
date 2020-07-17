import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class PendenciaRecebimentoModel extends Model {
  @attr('number') quantidade;
  @attr('string') observacao;
  @attr('string') classificacao;
  @attr('date') data_prevista_recebimento;
  @attr('date') created_on;
  @attr('string') situacao;
  @attr('number') version_id;
  @attr('boolean') deleted;
  @attr('number') changed_by_lab_id;
  @belongsTo('laboratorio') laboratorio_id;
  @belongsTo('pessoa') pessoa_id;
  @belongsTo('tipo_produto') tipo_produto_id;
}
