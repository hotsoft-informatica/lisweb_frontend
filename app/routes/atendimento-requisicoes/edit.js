import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AtendimentoRequisicoesEditRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord(
      'atendimento_requisicao',
      params.atendimento_requisicao_id
    );
  }
}
