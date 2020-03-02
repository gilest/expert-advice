import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.send('enteredRoute');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.send('exitedRoute');
    }
  }
});
