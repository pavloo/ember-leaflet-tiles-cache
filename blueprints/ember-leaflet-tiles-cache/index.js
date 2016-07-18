/*jshint node:true*/
module.exports = {
  description: 'install Leaflet.TileLayer.PouchDBCached as bower dep',

  afterInstall: function(options) {
    return this.addBowerPackageToProject(
      'Leaflet.TileLayer.PouchDBCached',
      '~0.1.0'
    );
  }
};
