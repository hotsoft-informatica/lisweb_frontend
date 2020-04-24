import Ember from "ember"
import config from "./config/environment"

Router = Ember.Router.extend(
  location: config.locationType,
  rootURL: config.rootURL
)

Router.map( ->
  #Rotas para marcas.
  @route 'marcas/new'
  @route 'marcas/edit', path: '/marcas/:id/edit'
  @route 'marcas/index' , path: '/marcas'

  #Rotas para categorias de produto.
  @route("categorias-de-produto/new")
  @route("categorias-de-produto/show", path: "/categorias-de-produto/:categoria_produto_id")
  @route("categorias-de-produto/index", path: "/categorias-de-produto")

  #Rotas para pessoas.
  @route("pessoas/new")
  @route("pessoas/show", path: "/pessoas/:pessoa_id")
  @route("pessoas/index", path: "/pessoas")

  #Rotas para tipos de pessoas.
  @route("tipos-de-pessoa/new")
  @route("tipos-de-pessoa/show", path: "/tipos-de-pessoa/:tipo_pessoa_id")
  @route("tipos-de-pessoa/index", path: "/tipos-de-pessoa")

  #Rotas para tipos de produto.
  @route("tipos-de-produto/new")
  @route("tipos-de-produto/show", path: "/tipos-de-produto/:tipo_produto_id")
  @route("tipos-de-produto/index", path: "/tipos-de-produto")

  #Rotas para unidades de medida.
  @route("unidades-de-medida/new")
  @route("unidades-de-medida/show", path: "/unidades-de-medida/:unidade_medida_id")
  @route("unidades-de-medida/index", path: "/unidades-de-medida")

  #Rotas para parametros nfse/chaves nfse.
  @route("chaves-nfse/new")
  @route("chaves-nfse/show", path: "/chaves-nfse/:chave_nfse_id")
  @route("chaves-nfse/index", path: "/chaves-nfse")

  #Rotas para unidades atendimento.
  @route("unidades-atendimento/new")
  @route("unidades-atendimento/show", path: "/unidades-atendimento/:unidade_atendimento_id")
  @route("unidades-atendimento/index", path: "/unidades-atendimento")

  #Rotas para grupos parametros nfse
  @route("grupos-parametros-nfse/new")
  @route("grupos-parametros-nfse/show", path: "/grupos-parametros-nfse/:grupo_parametro_id")
  @route("grupos-parametros-nfse/index", path: "/grupos-parametros-nfse")

  #Rotas para grupos centro custo
  @route("grupos-centro-custo/new")
  @route("grupos-centro-custo/show", path: "/grupos-centro-custo/:grupo_centro_custo_id")
  @route("grupos-centro-custo/index", path: "/grupos-centro-custo")

  #Rotas para pendências de recebimento
  @route("pendencias-recebimento/new")
  @route("pendencias-recebimento/show", path: "/pendencias-recebimento/:pendencias_recebimento_id")
  @route("pendencias-recebimento/index", path: "/pendencias-recebimento")


  @route("laboratorios")
  @route("login")

  @route("nao-autorizado")
  @route("pagina-nao-encontrada", { path: "/*path" })

)

export default Router
