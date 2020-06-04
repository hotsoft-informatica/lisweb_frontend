
import Component from '@ember/component';


export default Component.extend({
  //https://guides.emberjs.com/v3.3.0/components/triggering-changes-with-actions/
  //https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md

  actions: {
    saveMarca(marca) {
      let selfthis = this;
      marca.save().then( function() {
        selfthis.sendAction('redirectTo');
      });
    }
  }
});
