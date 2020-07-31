import Route from '@ember/routing/route';

export default class UnidadeAtendimentosIndexRoute extends Route {
  async model() {
    return this.store.findAll('unidade_atendimento');
  }
}
