import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr(), // Array
  views: DS.attr('number')
});
