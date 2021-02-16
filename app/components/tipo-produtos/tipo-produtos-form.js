import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import DefaultComponent from '../default/default';

export default class TipoProdutosFormComponent extends DefaultComponent {
  @service store;
  @tracked redirectTo = '/tipo_produtos';
  @tracked modelString = 'tipo_produto';

  @tracked country;

  countries = [
    { name: 'United States', code: 'US' },
    { name: 'Spain', code: 'ES' },
    { name: 'Portugal', code: 'PT', disabled: true },
    { name: 'Russia', code: 'RU', disabled: true },
    { name: 'Latvia', code: 'LV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'United Kingdom', code: 'GB' }
  ];

  get countryErrors() {
    if (this.country) {
      return [];
    } else {
      return ["Country can't be blank"];
    }
  }

  @action setCountry(value) {
    this.country = value;
  }
}
