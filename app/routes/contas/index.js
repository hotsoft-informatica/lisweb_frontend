import Route from '@ember/routing/route';

export default class ContasIndexRoute extends Route {
  async model() {
    return this.store.findAll('conta');
  }
}
