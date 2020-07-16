import Route from '@ember/routing/route';

export default class GruposCentroCustosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('grupo_centro_custo', params.grupo_centro_custo_id);
  }
}
