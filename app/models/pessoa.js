import Model, { attr, belongsTo } from '@ember-data/model';

export default class TipoPessoa extends Model {
  @attr('string') nome;
  @attr('string') razao_social;
  @attr('string') rg;
  @attr('string') cpf;
  @attr('string') cnpj;
  @attr('string') contato;
  @attr('string') email;
  @attr('string') logradouro;
  @attr('string') numero;
  @attr('string') complemento;
  @attr('string') bairro;
  @attr('string') cidade;
  @attr('string') uf;
  @attr('string') cep;
  @attr('string') codigo_original;
  @attr('string') fax;
  @attr('string') telefone;
  @attr('string') celular;
  @attr('string') tipo_logradouro;
  @attr('string') cod_ibge_municipio;
  @attr('string') inscricao_estadual;
  @attr('number') changed_by_lab_id;
  @attr('boolean') deleted;
  @belongsTo('laboratorio') laboratorio_id;
  @belongsTo('tipo_pessoa') tipo_pessoa_id;
  @belongsTo('version') version_id;
  @belongsTo('laboratory_domain') laboratory_domain_id;
  @belongsTo('empresa') empresa_id;
}
