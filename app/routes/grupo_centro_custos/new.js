import Route from '@ember/routing/route';

export default class GrupoCentroCustosNewRoute extends Route {
  model() {
    return this.store.createRecord('grupo_centro_custos');
  }
}
