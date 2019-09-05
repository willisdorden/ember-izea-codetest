import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {render,
  find,
  click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-pagination', function(hooks) {
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
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    },{
      user: this.get('user')
    }];
  });
  test('it renders (posts)', async function(assert) {
    this.set('users', this.users);
    // should render post
    await render(hbs`
       {{#user-pagination source = users as |users|}}
        <div id="usersContainer">
          {{#each users as |user|}}
               <User data-test-user-container @user={{user}} />
          {{/each}}
        </div>
      {{/user-pagination}}`);
    //
    assert.equal(this.$('#usersContainer').length, 1,
      'There should be posts rendered');
  });

    // Testing if clicking on pages change the paged content
    test( 'Clicking on the page actually renders the next page',
      async function( assert ) {
        this.set('users', this.users);
        // should render post
        await render(hbs`
       {{#user-pagination source = users as |users|}}
        <div id="usersContainer">
          {{#each users as |user|}}
               <User data-test-user-container @user={{user}} />
          {{/each}}
        </div>
      {{/user-pagination}}`);
        //
        assert.equal(this.$('#usersContainer').length, 1,
          'There should be posts rendered');

        // Now click on the second page, it should render the last post
        await click( find('[data-test-next-button]') );

      });
});
