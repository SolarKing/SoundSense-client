import Ember from 'ember';

export default Ember.Component.extend({

  selection: function() {
    var option = this.get("options")[0].item;
    console.log(option)
    return option;
  }.property(),
  isDropdownShowing: false,
  actions: {
    setSelection(opt) {
      this.set('selection', opt);
    },

    toggleDropdown() {
      console.log("toggle");
      if (this.get("isDropdownShowing")) {
        this.set("isDropdownShowing", false);
      } else {
        this.set("isDropdownShowing", true);
      }
    }

  }
});
