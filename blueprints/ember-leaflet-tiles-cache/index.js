/*jshint node:true*/
module.exports = {
  description: 'install Leaflet.TileLayer.PouchDBCached as bower dep',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject(
      'Leaflet.TileLayer.PouchDBCached',
      '~0.1.0'
    );
  }
};
