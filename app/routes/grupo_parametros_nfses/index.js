import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class GrupoParametrosNefsesIndexRoute extends Route {
  async model() {
    return this.store.query('grupo_parametros_nfse', {
      limit: 10,
      offset: 0
    });
  }
}
