import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('labs');
  this.route('grupos_centro_custo');
  this.route('centros_custo');
  this.route('categorias_produto');
  this.route('unidades_medida');
  this.route('marcas');
  // Rotas para marcas.
  this.route('marcas/new');
  this.route('marcas/edit', {path: "/marcas/:marca_id"});
  this.route('marcas/index', {path: "/marcas"});
  // Rotas para laboratoios.
  this.route('laboratorios/new');
  this.route('laboratorios/edit', {path: "/laboratorios/:laboratorio_id"});
  this.route('laboratorios/index', {path: "/laboratorios"});
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
