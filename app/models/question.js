import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr(), // Array
  views: DS.attr('number')
});
