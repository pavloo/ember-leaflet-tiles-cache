import { module, test } from 'qunit';
import Pretender from 'pretender';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
var dbTotalDocs = 0;
// DB_NAME is taken from Leaflet.TileLayer.PouchDBCached
const DB_NAME = 'offline-tiles';
module('Acceptance: tile-layer', {
  beforeEach: (assert) => {
    App = startApp();
    const done = assert.async();
    const db = new PouchDB(DB_NAME);
    db.destroy().then(() => {
      const server = new Pretender(function(){});

      server.unhandledRequest = function(verb, path/*, request */) {
        if (!path.match(/^blob:/)) {
          throw new Error(`Unhandled request: ${path}`);
        }
      };
      done();
    });
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
    dbTotalDocs = 0;
  }
});

function checkDbTotalDocs(attempts) {
  if (attempts === 0 || dbTotalDocs !== 0) {
    return;
  }
  setTimeout(() => {
    const db = new PouchDB(DB_NAME);
    db.allDocs().then((docs) => {
      let totalRows = docs.total_rows;
      dbTotalDocs = totalRows;
    });
    checkDbTotalDocs(--attempts);
  }, 200);
}

test('renders map and caches tiles to PouchDB', function(assert) {
  assert.expect(1);

  visit('/');
  checkDbTotalDocs(5);
  Ember.Test.registerWaiter(function() {
    return dbTotalDocs !== 0;
  });
  andThen(() => {
    assert.ok(dbTotalDocs > 0, 'populates pouch db with tiles');
  });
});
