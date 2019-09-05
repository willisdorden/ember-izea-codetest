import { Factory} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  title() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraph();
  },

  afterCreate(post, server) {
    post.update({
      user: server.create('user')
    });
  }


});
