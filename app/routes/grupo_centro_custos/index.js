import Route from '@ember/routing/route';

export default class GrupoCentroCustosIndexRoute extends Route {
  async model() {
    return this.store.findAll('grupo_centro_custos');
  }
}
