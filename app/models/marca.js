import Model, { attr } from '@ember-data/model';

export default class MarcaModel extends Model {
  @attr('string') nome;
  @attr('text') descricao;
  @attr('number') laboratorio_id;
  @attr('number') version_id;
  @attr('number') deleted;
}
