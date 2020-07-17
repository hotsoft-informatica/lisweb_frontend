import Route from '@ember/routing/route';

export default class ConfiguracaoLaboratoriosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('configuracao_laboratorio', params.configuracao_laboratorio_id);
  }
}
