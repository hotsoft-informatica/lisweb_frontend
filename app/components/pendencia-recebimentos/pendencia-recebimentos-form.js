import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DefaultComponent from '../default/default';

export default class PendenciaRecebimentosFormComponent extends DefaultComponent {
  @tracked redirectTo = '/pendencia_recebimentos';
  @tracked modelString = 'pendencia_recebimento';
}
