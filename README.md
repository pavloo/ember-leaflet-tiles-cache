# Ember-leaflet-tiles-cache

This addon extends [ember-leaflet](http://www.ember-leaflet.com/) 2.0. It extends the `{{tile-layer}}` component to support tiles caching.
It uses [this leaflet extension](https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached) to accomplish that.

## Usage
```javascript
tileOptions: {
  type: 'map',
  subdomains: '1234',
  ext: 'png',
  attribution: 'Map data © <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
  useCache: true // this enables tiles caching
}
````

```hbs
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
  {{tile-layer url=tileUrl options=tileOptions}}
{{/leaflet-map}}
```

## Installation

Run:
```bash
ember install ember-leaflet-tiles-cache
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
