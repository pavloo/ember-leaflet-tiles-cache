import TileLayer from 'ember-leaflet/components/tile-layer';

export default TileLayer.extend({
  leafletOptions: [
    'useCache', 'saveToCache', 'useOnlyCache', 'cacheMaxAge'
  ],

  leafletEvents: [
    'tilecachehit', 'tilecachemiss', 'seedstart', 'seedend', 'seedprogress'
  ]
});
