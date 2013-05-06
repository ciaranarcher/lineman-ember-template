// FIXME: This will actually post to the server, which isn't a great time.
// Need to figure out how to create a vanilla store for Ember Data

describe ("App.Hello", function() {
  Given(function() {
    this.subject = App.Hello.createRecord({greeting: "Hi", audience: "Dude"});
  });

  Then(function() {
    return this.subject.get('greeting') === "Hi";
  });

  Then(function() {
    return this.subject.get('audience') === "Dude";
  });
});
