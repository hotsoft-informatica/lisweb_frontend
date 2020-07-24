import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class GrupoParametrosNefsesEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('grupo_parametros_nefse', params.grupo_parametros_nefse_id);
  }
}
