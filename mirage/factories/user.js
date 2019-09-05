import { Factory} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },
  username() {
    return faker.internet.userName();
  },
  address() {

  },
  email() {
    return faker.internet.email()
  },
  phone() {
    return faker.phone.phoneNumber()
  },
  website() {
    return faker.internet.url()
  },
  company() {
  },
  // afterCreate( user, server ){
  //   server.createList( 'post', 3, {user});
  // }
});
