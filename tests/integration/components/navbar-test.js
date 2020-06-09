import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Navbar', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Revisar este teste de render do menu
  // TODO: Linter reclamando muito nesse teste
  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Navbar/>`);

    // TODO: Testar se contem texto do menu
    assert.ok(this.element.textContent.trim(), 'Renderizado');

    // Template block usage:
    await render(hbs`
      <Navbar>
        template block text
      </Navbar>
    `);

    // TODO: Testar se contem texto do menu
    assert.ok(this.element.textContent.trim(), 'Renderizado');
  });
});
