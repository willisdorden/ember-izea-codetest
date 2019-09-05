import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-side-panel', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach( function() {
    this.user = [{
      name: 'john doe',
      username: '@joe',
      address: {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      email: 'john@gmail.com',
      phone: '234098238',
      website:'www.wwwwww.com',
      company: {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }];
    this.users = [{
      user: this.get('user')
    }];
  });
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('users', this.users);

    await render(hbs`<UserSidePanel @user={{users}} />`);

    assert.equal(this.$('#userSidePanel').length,1);

  });
});
