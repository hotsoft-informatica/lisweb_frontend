import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class OrcamentoModel extends Model {
  @attr('number') numero;
  @attr('string') status;
  // @attr('date') data_validade;
  @attr('string') observacao;
  // @attr('number') usuario_id;
  // @attr('number') version_id;
  // @attr('boolean') deleted;
  // @attr('number') changed_by_lab_id;
  @belongsTo('laboratorio') laboratorio;
  // @belongsTo('laboratory_domain') laboratory_domain_id;
  // @belongsTo('pessoa') pessoa_id;
}
