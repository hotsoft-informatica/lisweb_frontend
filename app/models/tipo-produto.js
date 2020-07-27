import Model, { attr, belongsTo } from '@ember-data/model';

export default class TipoProdutoModel extends Model {
  @attr('string') mnemonico;
  @attr('string') nome;
  @attr('string') descricao;
  @belongsTo('laboratorio') laboratorio;
  // @attr('number') unidade_medida_saida_id;
  // @attr('number') estoque_minimo;
  // @attr('number') estoque_ideal;
  // @belongsTo('produtos') produto;
}
