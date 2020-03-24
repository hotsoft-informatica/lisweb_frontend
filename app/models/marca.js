import Model, { attr } from '@ember-data/model';

export default class MarcaModel extends Model {
  @attr('string') nome;
  @attr('string') descricao;
  @attr('number') laboratorio_id;
  @attr('number') version_id;
  @attr('boolean', { defaultValue: false }) deleted;
  @attr('date', { defaultValue() { return new Date(); } }) created_at;
}
