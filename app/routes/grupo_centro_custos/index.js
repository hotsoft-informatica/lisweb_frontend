import Route from '@ember/routing/route';

export default class GrupoCentroCustosIndexRoute extends Route {
  model() {
    return this.store.findAll('grupo_centro_custos');
  }
}
