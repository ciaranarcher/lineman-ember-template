App.AboutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', 'Made possible by open source.');
  }
});
