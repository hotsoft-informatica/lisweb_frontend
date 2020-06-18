import Route from '@ember/routing/route';

export default class CentroCustosIndexRoute extends Route {
  async model() {
    return this.store.findAll('centro_custo');
  }
}
