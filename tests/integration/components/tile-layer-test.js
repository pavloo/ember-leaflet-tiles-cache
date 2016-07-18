import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tile-layer', 'Integration | Component | tile layer', {
  integration: true
});

test('it renders with useCache option', function(assert) {
  this.set('tileOptions', {
    type: 'map',
    subdomains: '1234',
    ext: 'png',
    attribution: 'Map data © <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    useCache: true
  });

  this.set(
    'tileUrl',
    'http://cors.io/?u=https://tiles{s}-6466e93b22e58468d2cb026d1c3fbbae.skobblermaps.com/TileService/tiles/2.0/110015311100/2/{z}/{x}/{y}.png'
  );

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{tile-layer url=tileUrl options=tileOptions}}
    {{/leaflet-map}}
  `);

  assert.equal(this.$().text().trim(), '+-Leaflet | Map data © OpenStreetMap contributors');
});
