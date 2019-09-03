import DS from 'ember-data';
const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  user: belongsTo('user'),

  title: attr('string'),
  body: attr('string')
});
