import Route from '@ember/routing/route';

export default class UnidadeAtendimentosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('unidade_atendimento', params.unidade_atendimento_id);
  }
}
