import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let store = this.store;

    return store.findAll('post')

  }
});
