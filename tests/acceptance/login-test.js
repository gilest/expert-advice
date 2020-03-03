import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {
  mock,
  mockQuery,
  build,
  buildList,
  setupFactoryGuy
} from 'ember-data-factory-guy';
import loginPage from '../helpers/page-objects/login';

module('Acceptance | login test', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  test('User is redirected to the login page if visiting a protected page', async function(assert) {
    await visit('/ask');

    assert.equal(currentURL(), loginPage.url);
  });

  test('Submitting an empty login form', async function(assert) {
    await loginPage.visit();

    mock({
      type: 'POST',
      url: '/oauth/token',
      responseText: '{}',
      status: 401
    });

    await loginPage.clickSubmit();

    assert.dom(loginPage.selectors.errorMessage).containsText('Invalid login.');
  });

  test('Successfully logging in', async function(assert) {
    mock({
      type: 'GET',
      url: '/api/v1/users/me',
      responseText: build('user')
    });

    mockQuery('question').returns({ json: buildList('question', 5) });

    await loginPage.visit();

    mock({
      type: 'POST',
      url: '/oauth/token',
      responseText: {
        access_token:
          'caa120a1f215c747cd2fe33fb03748ea7620b0027cdeef4a857ee5855e08975d',
        token_type: 'Bearer',
        expires_in: 7200,
        refresh_token:
          'c98b13226861469b678048d905f918b11403a06fd09a2f1d11262274f97291ca',
        created_at: 1583215131
      },
      status: 200
    });

    await loginPage.clickSubmit();

    assert.equal(currentURL(), '/');
  });
});
