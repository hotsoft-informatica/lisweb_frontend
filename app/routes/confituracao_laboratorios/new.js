import Route from '@ember/routing/route';
// import CentroCusto from 'lisweb-frontend/models/centro-custo';

export default class ConfiguracaoLaboratoriosNewRoute extends Route {
  async model() {
    return this.store.createRecord('configuracao_laboratorio');
  }
}
