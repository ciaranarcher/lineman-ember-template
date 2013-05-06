describe ('App.About', function() {
  Given(function() {
    var mockController = Ember.Object.create({content: 'Made possible by open source!'});
    this.view = App.AboutView.create();
    this.view.set('controller', mockController);

    self = this;
    Em.run(function() { self.view.append(); });
    Em.run.sync();
  });

  Then(function() {
    expect(this.view.get('controller')).toBeDefined();
  });

  Then(function() {
    return this.view.get('content') === 'Made possible by open source!';
  });
});