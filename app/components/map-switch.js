import Ember from 'ember';

var mapid1 = 'b64bdd175e124a5e8226a9efc8a048c0';
var mapid2 = '010f412d4d0a4e8f9ff09ead37963ac7';

export default Ember.Component.extend({

  classNames: ['btn btn-primary'],

  tagName: 'button',

  click() {
    var mapid = this.get('mapid');
    if (mapid === mapid1) {
      this.set('mapid', mapid2);
    } else {
      this.set('mapid', mapid1);
    }
  }

});
