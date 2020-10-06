import Model, { attr, belongsTo } from '@ember-data/model';

export default class TipoProdutoModel extends Model {
  @attr('string') mnemonico;
  @attr('string') nome;
  @attr('string') descricao;
  // @attr('number') unidade_medida_saida_id;
  @attr('number') categoria_produto_id;
  @belongsTo('laboratorio') laboratorio;
  @belongsTo('unidade_medida') unidade_medida;
  @belongsTo('categoria_produto') categoria_produto;
  // @attr('number') estoque_minimo;
  // @attr('number') estoque_ideal;
}
