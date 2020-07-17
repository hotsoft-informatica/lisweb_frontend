import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class AtendimentoRequisicoesEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('atendimento_requisicao', params.atendimento_requisicao_id);
  }
}
