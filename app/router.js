import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;

  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('labs');
  this.route('grupos_centro_custo');
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
  this.route('grupo_centro_custos/edit', {
    path: '/grupo_centro_custos/:grupo_centro_custo_id',
  });
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
  // Rotas para laboratoios.
  this.route('laboratorios/new');
  this.route('laboratorios/edit', { path: '/laboratorios/:laboratorio_id' });
  this.route('laboratorios/index', { path: '/laboratorios' });
  this.route('tipos_produto');
  this.route('unidades_atendimento');
  this.route('contas');
  this.route('contas_contabeis');
  // Plano de contas?
  this.route('tipos_pessoa');
  this.route('pessoas');
  // Central de Lancamentos?
  this.route('lancamentos');
  this.route('notas');
  // Requisicao de materiais
  this.route('atendimentos_requisicoes');
  // Lista compras?
  this.route('orcamentos');
  // Elaboracao de Pedidos?
  this.route('pedidos');
  this.route('recebimentos_produtos');
  this.route('pendencias_recebimento');
  this.route('baixas_produtos');
  this.route('configuracoes_laboratorio');
  this.route('chaves_nfse');
  this.route('grupos_parametros_nfse');
  this.route('ac_filter_defs');
});
