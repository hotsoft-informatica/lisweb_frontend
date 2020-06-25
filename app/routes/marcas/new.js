import Route from '@ember/routing/route'

export default class MarcasNewRoute extends Route {
  async model() {
    return this.store.createRecord('marca')
  }
}
