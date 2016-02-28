import Ember from 'ember';

export default Ember.Controller.extend({

  storage: 0,

  mean: 520,

  names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],

  volumeRange: [5, 45],

  volume: 25,

  soundLevelOpts: [
    { item: "increases", bool: true },
    { item: "decreases", bool: false }
  ],

  volumeLevelOpts: [
    { item: "increases", bool: true },
    { item: "decreases", bool: false }
  ],
  actions: {
    selectPerson() {
      console.log("thing happened");
    },
    toggleDynamicVolume() {
      if (this.get("isDynamic")) {
        this.set("isDynamic", false);
      } else {
        this.set("isDynamic", true);
      }
    },

    changeVolume() {
      Ember.$.ajax({
        url: "http://192.168.0.94:8080/api/v1/set_volume?SessionToken=LocalServer-1001&Volume=25",
        type: "GET",
        success: function(data) {
          console.log(data);
        },
        error: function(data) {
          console.log(data);
        }
      });
    },

    getData() {

      var self = this;
      Ember.$.ajax({
         url: "http://api-m2x.att.com/v2/devices/0e8d3728c76da92336aff76a43dfe720/streams/soundsensetracker",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader("X-M2X-KEY", "0e85d41fff93fabad5e212d6e3033b88");},
         success: function(data) {
           self.set("storage", data.value);
           console.log(data.value);
        }
      });

    }

  }
});
