/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-tiles-cache',

  included: function(app) {
    app.import(
      app.bowerDirectory +
        '/Leaflet.TileLayer.PouchDBCached/L.TileLayer.PouchDBCached.js'
    );
    app.import(
      app.bowerDirectory +
        '/pouchdb/dist/pouchdb.min.js'
    );
  }
};
