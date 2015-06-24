import Ember from 'ember';
import Search from 'esri/dijit/Search';

export default Ember.Component.extend({

  willRemoveElement() {
    var search = this.get('search');
    if (search) {
      search.destroy();
    }
  },

  onMapChange: function() {
    var search = this.get('search');
    var map = this.get('map');
    if (map && search) {
      search.set('map', map);
    }
    if (map && !search) {
      search = new Search({
        map: this.get('map')
      }, this.elementId);
      this.set('search', search);
    }
  }.observes('map')

});
