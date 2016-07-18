import TileLayer from 'ember-leaflet/components/tile-layer';

export default Ember.Component.extend({
  leafletOptions: [
    'useCache', 'saveToCache', 'useOnlyCache', 'cacheMaxAge'
  ],

  leafletEvents: [
    'tilecachehit', 'tilecachemiss', 'seedstart', 'seedend', 'seedprogress'
  ]
});
