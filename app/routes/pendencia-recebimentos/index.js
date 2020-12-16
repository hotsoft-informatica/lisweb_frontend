import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class PendenciaRecebimentosIndexRoute extends Route {
  async model() {
    return this.store.query('pendencia_recebimento', {
      limit: 10,
      offset: 0,
    });
  }
}
