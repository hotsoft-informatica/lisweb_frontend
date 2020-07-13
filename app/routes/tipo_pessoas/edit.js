import Route from '@ember/routing/route';

export default class TipoPessoasEditRoute extends Route {
  async model(params) {
    return this.store.findRecord('tipo_pessoa', params.tipo_pessoa_id);
  }
}
