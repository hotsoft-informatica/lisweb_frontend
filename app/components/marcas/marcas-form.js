
import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    saveMarca(marca) {
      marca.save().then(() => this.get('router').transitionTo('/marcas'));
    }
  }
});
