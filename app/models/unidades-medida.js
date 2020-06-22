import Model, { attr, belongsTo } from '@ember-data/model';
// TODO: 'attr' is defined but never used.eslintno-unused-vars

export default class UnidadesMedidaModel extends Model {
  @attr('string') nome;
  @attr('string') sigla;
  @attr('string') descricao;
  @attr('number') version_id;
  @attr('number') laboratory_domain_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio;
}
