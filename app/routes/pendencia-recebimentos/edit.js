import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class PendenciaRecebimentosEditRoute extends Route {
  async model(params) {
    return this.store.findRecord(
      'pendencia_recebimento',
      params.pendencia_recebimento_id
    );
  }
}
