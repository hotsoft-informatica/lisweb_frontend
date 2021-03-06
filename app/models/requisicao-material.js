import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequisicaoMaterialModel extends Model {
  @attr('string') quantidade;
  @attr('boolean') ativo;
  // @attr('boolean') deleted;
  // @attr('number') changed_by_lab_id;
  @belongsTo('laboratorio') laboratorio;
  // @belongsTo('centro_custo') centro_custo_id;
  // @belongsTo(' tipo_produto') tipo_produto_id;
}
