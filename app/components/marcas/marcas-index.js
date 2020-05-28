
import Component from '@ember/component';

export default Component.extend({

  actions: {
    deleteMarca(marca) {
      marca.destroyRecord();
    }
  }
});
