import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class UnidadeAtendimentoModel extends Model {
  @attr('string') nome;
  @attr('number') id_original;
  @attr('number') grupo_parametros_nfse_id;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('number') changed_by_lab_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
