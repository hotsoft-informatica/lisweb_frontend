import Route from '@ember/routing/route';

export default class UnidadeAtendimentosNewRoute extends Route {
  async model() {
    return this.store.createRecord('unidade_atendimento');
  }
}
