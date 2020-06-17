import Route from '@ember/routing/route';

export default class CentroCustosIndexRoute extends Route {
  model() {
    return this.store.findAll('centro_custos');
  }
}
