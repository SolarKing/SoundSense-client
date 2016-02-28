import Ember from 'ember';
import StartInitializer from '../../../initializers/start';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | start', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  StartInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
