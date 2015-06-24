import Ember from 'ember';
import Legend from 'esri/dijit/Legend';

export default Ember.Component.extend({

  classNames: ['legendDiv'],
  willRemoveElement() {
    var legend = this.get('legend');
    if (legend) {
      legend.destroy();
    }
  },
  onMapChange: function() {
    var legend = this.get('legend');
    var map = this.get('map');
    if (map && legend) {
      legend.set('map', map);
      legend.refresh();
    }
    if (map && !legend) {
      legend = new Legend({
        map: map
      }, this.elementId);
      this.set('legend', legend);
      legend.startup();
    }
  }.observes('map')

});
