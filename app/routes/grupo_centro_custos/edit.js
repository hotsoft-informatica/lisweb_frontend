import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GruposCentroCustosRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('grupo_centro_custos', params.grupo_centro_custo_id);
  }
}
