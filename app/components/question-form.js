import Component from '@ember/component';

export default Component.extend({
  question: null,
  onSuccess(/* question */) {},

  actions: {
    async createQuestion(question) {
      try {
        await question.save();
      } catch (error) {
        if (!error.isAdapterError) {
          throw error;
        }
        return;
      }
      this.get('onSuccess')(question);
    }
  }
});
