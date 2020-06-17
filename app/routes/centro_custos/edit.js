import Route from '@ember/routing/route';

export default class CentroCustosEditRoute extends Route {
  model(params) {
    return this.store.findRecord('centro_custos', params.centro_custo_id);
  }
}
