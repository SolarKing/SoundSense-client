import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    function doTheData(data) {
      console.log(data);
      setTimeout(1000);
    }
    console.log("init");
    Ember.run.later(function() {
      Ember.$.ajax({
        type: 'GET',
        url: 'https://secure-reaches-20479.herokuapp.com/api/v1/soundsense',
        success: doTheData()
      });
    }, 1000);
  }
});
