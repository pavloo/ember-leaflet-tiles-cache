import Ember from 'ember';

export default Ember.Controller.extend({
  tileOptions: {
    type: 'map',
    subdomains: '1234',
    ext: 'png',
    attribution: 'Map data © <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    useCache: true
  },

  tileUrl: 'http://cors.io/?u=https://tiles{s}-6466e93b22e58468d2cb026d1c3fbbae.skobblermaps.com/TileService/tiles/2.0/110015311100/2/{z}/{x}/{y}.png'
});
