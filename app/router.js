import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speakers', { path: "/speakers" });
  this.route('settings', { path: "/speakers/settings"});
});

export default Router;
