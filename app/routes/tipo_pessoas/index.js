import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class TipoPessoasIndexRoute extends Route {
  async model() {
    return this.store.query('tipo_pessoa', {
      limit: 10,
      offset: 0
    });
  }
}
