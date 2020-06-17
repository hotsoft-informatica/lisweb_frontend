import Route from '@ember/routing/route';

export default class GruposCentroCustosRoute extends Route {
  model(params) {
    return this.store.findRecord('grupo_centro_custos', params.grupo_centro_custo_id);
  }
}
