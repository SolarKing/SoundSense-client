import Ember from 'ember';

export default Ember.Component.extend({
  volume: 25,
  actions: {
    mute() {
      this.set("volume", 0);
    },
    showDropdown() {
      if (this.get("isDropped")) {
        this.set("isDropped", false);
      } else {
        this.set("isDropped", true);
      }
    }
  }
});
