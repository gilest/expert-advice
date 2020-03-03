import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
  currentSession: service(),

  deleteQuestion: task(function * () {
    const question = this.get('model');
    try {
      yield question.destroyRecord();
    } catch (e) {
      throw e;
    }
    this.transitionToRoute('index');
  })
});
