import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;

  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('labs');
  this.route('centros_custo');
  this.route('categorias_produto');
  this.route('unidades_medida');
  this.route('marcas');
  // Rotas para marcas.
  this.route('marcas/new');
  this.route('marcas/edit', { path: '/marcas/:marca_id' });
  this.route('marcas/index', { path: '/marcas' });
  // Rotas para Unidades Medidas.
  this.route('unidades_medidas/new');
  this.route('unidades_medidas/edit', { path: '/unidades_medidas/:unidades_medida_id' });
  this.route('unidades_medidas/index', { path: '/unidades_medidas' });
  // Rotas para Unidade Atendimentos.
  this.route('unidade_atendimentos/new');
  this.route('unidade_atendimentos/edit', { path: '/unidade_atendimentos/:unidade_atendimento_id' });
  this.route('unidade_atendimentos/index', { path: '/unidade_atendimentos' });
  // Rotas para Centro Custos.
  this.route('centro_custos/new');
  this.route('centro_custos/edit', { path: '/centro_custos/:centro_custo_id' });
  this.route('centro_custos/index', { path: '/centro_custos' });
  // Rotas para Contas.
  this.route('contas/new');
  this.route('contas/edit', { path: '/contas/:conta_id' });
  this.route('contas/index', { path: '/contas' });
  // Rotas para conta contabeis = Plano de Contas.
  this.route('conta_contabeis/new');
  this.route('conta_contabeis/edit', { path: '/conta_contabeis/:conta_contabil_id' });
  this.route('conta_contabeis/index', { path: '/conta_contabeis' });
  // Rotas para grupo centro custos.
  this.route('grupo_centro_custos/new');
  this.route('grupo_centro_custos/edit', { path: '/grupo_centro_custos/:grupo_centro_custo_id' });
  this.route('grupo_centro_custos/index', { path: '/grupo_centro_custos' });
  // Rotas para categoria produtos.
  this.route('categoria_produtos/new');
  this.route('categoria_produtos/edit', { path: '/categoria_produtos/:categoria_produto_id' });
  this.route('categoria_produtos/index', { path: '/categoria_produtos' });
  // Rotas para tipo produtos.
  this.route('tipo_produtos/new');
  this.route('tipo_produtos/edit', { path: '/tipo_produtos/:tipo_produto_id' });
  this.route('tipo_produtos/index', { path: '/tipo_produtos' });
  // Rotas para tipo pessoas.
  this.route('tipo_pessoas/new');
  this.route('tipo_pessoas/edit', { path: '/tipo_pessoas/:tipo_pessoa_id' });
  this.route('tipo_pessoas/index', { path: '/tipo_pessoas' });
  // Rotas para pessoas.
  this.route('pessoas/new');
  this.route('pessoas/edit', { path: '/pessoas/:pessoa_id' });
  this.route('pessoas/index', { path: '/pessoas' });
  // Rotas para laboratoios.
  this.route('laboratorios/new');
  this.route('laboratorios/edit', { path: '/laboratorios/:laboratorio_id' });
  this.route('laboratorios/index', { path: '/laboratorios' });
  this.route('tipos_produto');
  this.route('unidades_atendimento');
  this.route('contas_contabeis');
  // Plano de contas?
  this.route('tipos_pessoa');
  // Rotas para lançamentos.
  this.route('lancamentos/new');
  this.route('lancamentos/edit', { path: '/lancamentos/:lancamento_id' });
  this.route('lancamentos/index', { path: '/lancamentos' });
  // Rotas para notas.
  this.route('notas/new');
  this.route('notas/edit', { path: '/notas/:nota_id' });
  this.route('notas/index', { path: '/notas' });
  // Rotas para requisicao materiais.
  this.route('requisicao_materiais/new');
  this.route('requisicao_materiais/edit', { path: '/requisicao_materiais/:requisicao_material_id' });
  this.route('requisicao_materiais/index', { path: '/requisicao_materiais' });
  // Central de Lancamentos?
  this.route('lancamentos');
  this.route('notas');
  // Rotas para atendimento requisições
  this.route('atendimento_requisioes/new');
  this.route('atendimento_requisioes/edit', { path: '/atendimento_requisioes/:atendimento_requisicao_id' });
  this.route('atendimento_requisioes/index', { path: '/atendimento_requisioes' });
  // Rotas para orçamentos
  this.route('orcamentos/new');
  this.route('orcamentos/edit', { path: '/orcamentos/:orcamento_id' });
  this.route('orcamentos/index', { path: '/orcamentos' });
  // Lista compras?
  this.route('orcamentos');
  // Rotas para pedidos
  this.route('pedidos/new');
  this.route('pedidos/edit', { path: '/pedidos/:pedido_id' });
  this.route('pedidos/index', { path: '/pedidos' });
  // Rotas para recebimento produtos
  this.route('recebimento_produtos/new');
  this.route('recebimento_produtos/edit', { path: '/recebimento_produtos/:recebimento_produto_id' });
  this.route('recebimento_produtos/index', { path: '/recebimento_produtos' });
  // Rotas para pendencia recebimentos
  this.route('pendencia_recebimentos/new');
  this.route('pendencia_recebimentos/edit', { path: '/pendencia_recebimentos/:pendencia_recebimento_id' });
  this.route('pendencia_recebimentos/index', { path: '/pendencia_recebimentos' });
  // Rotas para confituração laboratórios
  this.route('configuracao_laboratorios/new');
  this.route('configuracao_laboratorios/edit', { path: '/configuracao_laboratorios/:configuracao_laboratorio_id' });
  this.route('configuracao_laboratorios/index', { path: '/configuracao_laboratorios' });
  // Rotas para grupos parametros nfse
  this.route('grupos_parametros_nfses/new');
  this.route('grupos_parametros_nfses/edit', { path: '/grupos_parametros_nfses/:grupos_parametros_nfse_id' });
  this.route('grupos_parametros_nfses/index', { path: '/grupos_parametros_nfses' });
  // Rotas para chaves nfses
  this.route('chaves_nfses/new');
  this.route('chaves_nfses/edit', { path: '/chaves_nfses/:chaves_nfse_id' });
  this.route('chaves_nfses/index', { path: '/chaves_nfses' });
  // Rotas para baixa produtos
  this.route('baixa_produtos/new');
  this.route('baixa_produtos/edit', { path: '/baixa_produtos/:baixa_produto_id' });
  this.route('baixa_produtos/index', { path: '/baixa_produtos' });
  this.route('ac_filter_defs');

});
