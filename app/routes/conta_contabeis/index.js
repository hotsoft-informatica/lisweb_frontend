import Route from '@ember/routing/route';

export default class ContaContabeisIndexRoute extends Route {
  async model() {
    return this.store.findAll('conta_contabil');
  }
}
