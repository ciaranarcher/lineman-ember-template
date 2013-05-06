App.AboutView = Ember.View.extend({
  controller: App.get('AboutContoller'),
  contentBinding: Ember.Binding.oneWay('controller.content')
});