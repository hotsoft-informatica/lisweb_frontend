import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | chave nfse', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('chave-nfse', {});
    assert.ok(model);
  });
});
