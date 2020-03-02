import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | views-summary', function(hooks) {
  setupRenderingTest(hooks);

  test('< 1000 views renders the full value', async function(assert) {
    this.set('inputValue', '834');

    await render(hbs`{{views-summary inputValue}}`);

    assert.equal(this.element.textContent.trim(), '834');
  });

  test('> 1000 views renders a summarised value', async function(assert) {
    this.set('inputValue', '120000');

    await render(hbs`{{views-summary inputValue}}`);

    assert.equal(this.element.textContent.trim(), '120k');
  });
});
