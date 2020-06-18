import Route from '@ember/routing/route';
// import CentroCusto from 'lisweb-frontend/models/centro-custo';

export default class CentroCustosNewRoute extends Route {
  async model() {
    return this.store.createRecord('centro_custo');
  }
}
