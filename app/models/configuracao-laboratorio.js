import Model, { attr, belongsTo } from '@ember-data/model';

export default class ConfiguracaoLaboratorioModel extends Model {
  @attr('number') version_id;
  @attr('number') conta_padrao_id;
  @attr('number') conta_contabil_caixa_id;
  @attr('number') conta_contabil_faturamento_id;
  @attr('number') conta_contabil_transferencia_entrada_id;
  @attr('number') conta_contabil_transferencia_saida_id;
  @attr('number') changed_by_lab_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio_id;
}
