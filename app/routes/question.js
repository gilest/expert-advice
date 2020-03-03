import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import $ from 'jquery';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('question', params.slug);
  },
  setupController(controller, model) {
    this._super(controller, model);

    const questionAdapter = this.store.adapterFor('questions');

    $.ajax({
      type: 'PATCH',
      url: `${questionAdapter.urlForCreateRecord('question')}/record_view`,
      contentType: 'application/json',
      data: JSON.stringify({ id: model.get('id') })
    });
  }
});
