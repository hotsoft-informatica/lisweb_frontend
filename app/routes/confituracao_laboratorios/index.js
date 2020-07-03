import Route from '@ember/routing/route';

export default class ConfiguracaoLaboratoriosIndexRoute extends Route {
  async model() {
    return this.store.findAll('configuracao_laboratorio');
  }
}
