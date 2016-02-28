import Ember from 'ember';

export default Ember.Route.extend({
   m2xData: Ember.inject.service('get-all-the-data'),
   didTransition() {
     m2xData.init();
   }
});
