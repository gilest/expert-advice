import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  views: DS.attr('number'),

  tagsArray: computed('tags', function() {
    return this.get('tags').split(',');
  })
});
