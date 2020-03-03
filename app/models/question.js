import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  answers: DS.hasMany('answer'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  views: DS.attr('number'),

  tagsArray: computed('tags', function() {
    return this.get('tags').split(',');
  }),

  loadedAnswers: computed('answers.@each.hasDirtyAttributes', function() {
    return this.get('answers').filter((answer) => !answer.get('hasDirtyAttributes'));
  })
});
