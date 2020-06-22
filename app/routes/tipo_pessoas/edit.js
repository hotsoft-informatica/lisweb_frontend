import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class TipoPessoasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('tipo_pessoa', params.tipo_pessoa_id);
  }
}
