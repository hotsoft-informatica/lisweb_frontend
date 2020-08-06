import Model, { attr, belongsTo } from '@ember-data/model';

export default class LancamentoModel extends Model {
  @attr('string') tipo;
  @attr('number') valor;
  // @attr('date') data_vencimento;
  @attr('string') descricao;
  @attr('string') status;
  // @attr('string') numero_documento;
  // @attr('string') natureza;
  // @attr('number') version_id;
  // @attr('number') laboratory_domain_id;
  // @attr('number') id_original;
  // @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
  // @belongsTo('pessoa') pessoa_id;
  // @belongsTo('unidade_atendimento') unidade_atendimento_id;
  // @belongsTo('conta_contabil') conta_contabil_id;
  // @belongsTo('conta') conta_id;
}
