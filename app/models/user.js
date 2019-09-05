import DS from 'ember-data';
const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  post: hasMany('post'),

  name: attr('string'),
  username: attr('string'),
  address: attr(),
  email: attr('string'),
  phone: attr('string'),
  website: attr('string'),
  company: attr()
});
